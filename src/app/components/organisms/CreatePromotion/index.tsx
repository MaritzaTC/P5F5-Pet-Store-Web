/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { TextRegular, TextRegular2, TextTitle } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons';
import { CreateInput, CreateInput3 } from '../../molecules/MiniCard';
import InputDate from '../../molecules/InputDate';
import { ButtonRounded3 } from '../../atoms/Buttons';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/app/api/graphql/querys/products';
import { CREAR_PROMOCION } from '@/app/api/graphql/mutations/promotions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon } from 'lucide-react';
import { GET_PROMOCIONES } from '@/app/api/graphql/querys/promotions';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/dist/client/router';


const index = () => {
   const router = useRouter();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login'); // Redirige si no hay token
      }
    }, [router]);
  const { data: promocionesData } = useQuery(GET_PROMOCIONES);


  const [titulo, setTitulo] = useState('');
  const [porcentajeDescuento, setPorcentajeDescuento] = useState('');
  const [producto, setProducto] = useState('');
  const [fechaInicio, setFechaInicio] = useState<Date | null>(null);
  const [fechaFin, setFechaFin] = useState<Date | null>(null);
  const [mensajeError, setMensajeError] = useState('');


  const [mensajeExito, setMensajeExito] = useState('');
  const { data, } = useQuery(GET_PRODUCTS);
  const [CrearPromocion] = useMutation(CREAR_PROMOCION);
  const handleCancelar = () => {
    setTitulo('');
    setProducto('');
    setPorcentajeDescuento('');
    setFechaInicio(null);
    setFechaFin(null);
    setMensajeError('');
    setMensajeExito('');
  };
  const handleGuardar = async () => {

    const promocionesActivas = promocionesData?.promociones?.filter((promo: { activa: boolean }) => promo.activa);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const productoYaTienePromo = promocionesActivas?.some((promo: any) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      promo.productos.some((p: any) => p.productoId === producto)
    );

    if (productoYaTienePromo) {
      setMensajeError("Este producto ya tiene una promoción activa.");
      setTimeout(() => setMensajeError(''), 5000);
      return;
    }
    console.log("Intentando crear promoción...");
    const descuento = parseInt(porcentajeDescuento);

    if (!titulo.trim()) {
      setMensajeError("El título no puede estar vacío.");
      setTimeout(() => setMensajeError(''), 5000);
      return;
    }

    if (isNaN(descuento) || descuento <= 0 || descuento > 100) {
      setMensajeError("El porcentaje de descuento debe ser un número entre 1 y 100.");
      setTimeout(() => setMensajeError(''), 5000);
      return;
    }

    if (!producto) {
      setMensajeError("Debes seleccionar un producto.");
      setTimeout(() => setMensajeError(''), 5000);
      return;
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Elimina la hora para comparar solo fechas

    if (!fechaInicio || fechaInicio < hoy) {
      setMensajeError("La fecha de inicio no puede ser anterior a hoy.");
      setTimeout(() => setMensajeError(''), 5000);
      return;
    }

    if (!fechaFin || fechaInicio < hoy) {
      setMensajeError("La fecha de fin no es válida.");
      setTimeout(() => setMensajeError(''), 5000);
      return;
    }

    if (fechaFin < fechaInicio) {
      setMensajeError("La fecha de fin no puede ser anterior a la fecha de inicio.");
      setTimeout(() => setMensajeError(''), 5000);
      return;
    }

    try {
      const { data: result } = await CrearPromocion({
        variables: {
          input: {
            titulo,
            fechaInicio: fechaInicio?.toISOString().split('T')[0],
            fechaFin: fechaFin?.toISOString().split('T')[0],
            porcentajeDescuento: parseInt(porcentajeDescuento),
            activa: true,
            productoIds: producto ? [producto] : [],
          },
        },
      });

      setMensajeExito("¡Creada con éxito!");
      setTitulo('');
      setProducto('');
      setPorcentajeDescuento('');
      setFechaInicio(null);
      setFechaFin(null);

      setTimeout(() => setMensajeExito(''), 5000);
    } catch (error) {
      setMensajeError("Por favor verifica los datos e inténtalo nuevamente.");
      setTimeout(() => setMensajeError(''), 5000);
    }
  };

  return (
    <div>
      <div>
        <div className='flex gap-4 ml-20 px-2 mt-6'>
       <Link href='/promotions'>
      <TextRegular2 text='Inicio'></TextRegular2>
                </Link>
          <GreaterIcon></GreaterIcon>
          <Link href='/adminfunctions'>
            <TextRegular2 text='Panel de Administrador'></TextRegular2>
          </Link>
          <GreaterIcon></GreaterIcon>
          <Link href="/adminpromotions">
           <TextRegular2 text='Promociones'></TextRegular2>
          </Link>
          <GreaterIcon></GreaterIcon>
          <TextRegular text='Crear'></TextRegular>
        </div>
        <div className='flex gap-4 ml-20 px-2 mt-6 mb-8 ' >
          <TextTitle text='Crear Promoción'></TextTitle>
          <div className='flex flex-col px-4 mt-6 '>
            <form className='flex flex-col gap-4 mt-10 justify-between' onSubmit={(e) => {
              e.preventDefault();  // <-- Evita el reload 
            }}>
              <CreateInput text='Nombre' value={titulo} onChange={(e) => setTitulo(e.target.value)} ></CreateInput>

              <CreateInput3
                text="Producto"
                isDropdown
                value={producto}
                onChange={(e) => setProducto(e.target.value)}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                options={data?.productos?.map((prod: any) => ({
                  value: prod.productoId,
                  label: prod.nombre,
                }))}
              />
              <CreateInput text='% Descuento' value={porcentajeDescuento} onChange={(e) => setPorcentajeDescuento(e.target.value)}></CreateInput>
              <InputDate text='Fecha Inicio' value={fechaInicio ?? undefined} onChange={(date) => setFechaInicio(date ?? null)} ></InputDate>
              <InputDate text='Fecha Fin' value={fechaFin ?? undefined} onChange={(date) => setFechaFin(date ?? null)} ></InputDate>
              <div className='flex justify-between w-full max-w-md mt-6'>
                <ButtonRounded3 text='Cancelar' className='text-[#F13434] border-[#F13434] border-1 text-bold ' onClick={handleCancelar} ></ButtonRounded3>
                <ButtonRounded3 text='Guardar' className='bg-[#00B22F] text-white text-bold border-none' onClick={handleGuardar}></ButtonRounded3>
              </div>
            </form>
            {mensajeExito && (
              <Alert className="mt-4 max-w-xl border-green-500 bg-green-50 text-green-800" >
                <AlertCircleIcon className="h-5 w-5" />
                <AlertTitle>Promoción</AlertTitle>
                <AlertDescription>
                  {mensajeExito}
                </AlertDescription>
              </Alert>

            )}
            {mensajeError && (
              <Alert variant="destructive" className="mt-4 max-w-xl">
                <AlertCircleIcon className="h-5 w-5" />
                <AlertTitle>Error al crear la promoción</AlertTitle>
                <AlertDescription>
                  {mensajeError}
                </AlertDescription>
              </Alert>
            )}

          </div></div>
      </div>
    </div>
  )
};

export default index