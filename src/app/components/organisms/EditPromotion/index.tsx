/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { TextRegular, TextRegular2, TextRegular7, TextTitle } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons'
import { CreateInput, CreateInput3 } from '../../molecules/MiniCard'
import InputDate from '../../molecules/InputDate'
import { ButtonRounded3 } from '../../atoms/Buttons'
import { Dropdown } from '../../molecules/Dropdowm'
import { useMutation, useQuery } from '@apollo/client'
import { ACTUALIZAR_PROMOCION, CREAR_PROMOCION } from '@/app/api/graphql/mutations/promotions'
import { GET_PRODUCTS } from '@/app/api/graphql/querys/products'
import Link from 'next/dist/client/link'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircleIcon } from 'lucide-react'
import { GET_PROMOCION_BY_ID, GET_PROMOCIONES } from '@/app/api/graphql/querys/promotions'
import { set } from 'date-fns'
import { se } from 'date-fns/locale'
import { useRouter } from 'next/router'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function index() {
   
  
    
   const router = useRouter();
   useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login'); // Redirige si no hay token
      }
    }, [router]);
  const { id } = router.query;

  // Estados
   const [selectedOption, setSelectedOption] = useState('');
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
const [fechaInicio, setFechaInicio] = useState<string | Date>('');
const [fechaFin, setFechaFin] = useState<string | Date>('');

  const [porcentajeDescuento, setPorcentajeDescuento] = useState('');
  const [producto, setProducto] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState('');
const [mostrarDialogo, setMostrarDialogo] = useState(false);

  // Query para cargar la promoción
  const { data, loading, error } = useQuery(GET_PROMOCION_BY_ID, {
    variables: { id },
    skip: !id, // evita correr antes de tener el ID
  });
  const { data: promocionesData } = useQuery(GET_PROMOCIONES);

  // Query para cargar productos (necesario para dropdown de producto)
  const { data: dataProductos } = useQuery(GET_PRODUCTS);

  // Mutación para actualizar
  const [actualizarPromocion] = useMutation(ACTUALIZAR_PROMOCION);

  // Cargar datos iniciales al estado
 useEffect(() => {
  if (data?.obtenerPromocionPorId) {
    const promo = data.obtenerPromocionPorId;
    setTitulo(promo.titulo);
    setCategoria(promo.categoria);
    setFechaInicio(promo.fechaInicio);
    setFechaFin(promo.fechaFin);
    setPorcentajeDescuento(promo.porcentajeDescuento.toString());
    setProducto(promo.productos[0]?.productoId || '');
    
  }
}, [data]);


  const handleGuardar = async () => {
     
        const promocionesActivas = promocionesData?.promociones?.filter((promo: { activa: boolean }) => promo.activa);


      
        const productoYaTienePromo = promocionesActivas?.some((promo: any) =>
            promo.categoria === selectedOption &&
         
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

        if (!fechaInicio || new Date(fechaInicio) < hoy) {
            setMensajeError("La fecha de inicio no puede ser anterior a hoy.");
            setTimeout(() => setMensajeError(''), 5000);
            return;
        }

        if (!fechaFin || new Date(fechaInicio) < hoy) {
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
      await actualizarPromocion({
        variables: {
          id,
          input: {
            titulo,
            categoria,
            fechaInicio,
            fechaFin,
            porcentajeDescuento: parseInt(porcentajeDescuento),
            productoIds:[parseInt(producto)],
          },
        },
      });
      setMostrarDialogo(true);
      setMensajeError('');
    } catch (err) {
      console.error(err);
      setMensajeError('Error al actualizar la promoción.');
      setMensajeExito('');
    }
  };

  const handleCancelar = () => {
    router.push('/listpromotions');
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar la promoción.</p>;

  return (
    <div>
      <div className='flex gap-4 ml-20 px-2 mt-6'>
        <TextRegular2 text='Inicio' />
        <GreaterIcon />
        <Link href='/adminfunctions'><TextRegular2 text='Panel de Administrador' /></Link>
        <GreaterIcon />
        <Link href="/adminpromotions"><TextRegular2 text='Promociones' /></Link>
        <GreaterIcon />
        <Link href='/listpromotions'><TextRegular text='Lista' /></Link>
      </div>

      <div className='flex gap-4 ml-20 px-2 mt-6 mb-8'>
        <div className='flex flex-col px-4 mt-6'>
          <TextTitle text='Editar promoción' />
          <form className='flex flex-col gap-4 mt-10 justify-between' onSubmit={(e) => {
            e.preventDefault();
            handleGuardar();
          }}>
            <div className='flex items-center gap-4 w-full max-w-md'>
              <TextRegular7 text='Categoría' />
              <Dropdown
                className='w-[266px]'
                label=''
                name='Categoría'
                options={[
                  { label: 'Alimentos y nutrición', value: 'Alimentos y nutrición' },
                  { label: 'Higiene y cuidado', value: 'Higiene y cuidado' },
                  { label: 'Juguetes y entretenimiento', value: 'Juguetes y entretenimiento' },
                  { label: 'Accesorios', value: 'Accesorios' },
                  { label: 'Salud y bienestar', value: 'Salud y bienestar' },
                  { label: 'Hogar y control de olores', value: 'Hogar y control de olores' }
                ]}
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              />
            </div>

            <CreateInput text='Nombre' value={titulo} onChange={(e) => setTitulo(e.target.value)} />

            <CreateInput3
              text='Producto'
              isDropdown
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              options={dataProductos?.productos?.map((prod: any) => ({
                value: prod.productoId,
                label: prod.nombre,
              })) || []}
            />

            <CreateInput
              text='% Descuento'
              value={porcentajeDescuento}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setPorcentajeDescuento(value);
                }
              }}
            />

           <InputDate
  text='Fecha Inicio'
  value={fechaInicio ? new Date(fechaInicio) : undefined}
  onChange={(date) => setFechaInicio(date ?? '')}
/>

<InputDate
  text='Fecha Fin'
  value={fechaFin ? new Date(fechaFin) : undefined}
  onChange={(date) => setFechaFin(date ?? '')}
/>
            <div className='flex justify-between w-full max-w-md mt-6'>
              <ButtonRounded3 text='Cancelar' className='text-[#F13434] border-[#F13434] border-1 text-bold' onClick={handleCancelar} />
              <ButtonRounded3 text='Guardar Cambios' className='bg-[#00B22F] text-white text-bold border-none w-[200px] ' onClick={handleGuardar} />
            </div>
          </form>

          {mensajeExito && (
            <Alert className="mt-4 max-w-xl border-green-500 bg-green-50 text-green-800">
              <AlertCircleIcon className="h-5 w-5" />
              <AlertTitle>Promoción</AlertTitle>
              <AlertDescription>{mensajeExito}</AlertDescription>
            </Alert>
          )}

          {mensajeError && (
            <Alert variant="destructive" className="mt-4 max-w-xl">
              <AlertCircleIcon className="h-5 w-5" />
              <AlertTitle>Error al editar la promoción</AlertTitle>
              <AlertDescription>{mensajeError}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
      <Dialog open={mostrarDialogo} onOpenChange={setMostrarDialogo}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>¿Qué deseas hacer ahora?</DialogTitle>
    </DialogHeader>
    <div className="mt-4">
      <p>Los cambios fueron guardados exitosamente.</p>
    </div>
    <DialogFooter className="mt-6">
      <Button variant="outline" onClick={() => setMostrarDialogo(false)}>
        Seguir editando
      </Button>
      <Button
        className="bg-green-600 text-white"
        onClick={() => router.replace('/listpromotions')}
      >
        Volver a la lista
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

    </div>
  );
}