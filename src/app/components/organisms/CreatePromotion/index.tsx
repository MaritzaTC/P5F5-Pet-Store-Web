/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { TextRegular, TextRegular2, TextTitle } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons';
import { CreateInput, CreateInput3 } from '../../molecules/MiniCard';
import InputDate from '../../molecules/InputDate';
import { ButtonRounded3 } from '../../atoms/Buttons';

import { useMutation, useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/app/api/graphql/querys/products';
import { CREAR_PROMOCION } from '@/app/api/graphql/mutations/promotions';


const index = () => {
   
  const [titulo, setTitulo] = useState('');
  const [porcentajeDescuento, setPorcentajeDescuento] = useState('');
  const [producto, setProducto] = useState('');
  const [fechaInicio, setFechaInicio] = useState<Date | null>(null);
  const [fechaFin, setFechaFin] = useState<Date | null>(null);
const [errors, setErrores] = useState<{ [key: string]: string }>({});

  const [mensajeExito, setMensajeExito] = useState('');
  const { data, } = useQuery(GET_PRODUCTS);
 const [CrearPromocion] = useMutation(CREAR_PROMOCION);

const handleGuardar = async () => {



    try {
      const { data: result } = await CrearPromocion({
        variables: {
          input: {
            titulo,
            fechaInicio: fechaInicio?.toISOString().split('T')[0],
            fechaFin: fechaFin?.toISOString().split('T')[0],
            porcentajeDescuento: parseFloat(porcentajeDescuento),
            activa: true,
            productoIds: [producto],
          }
        }
      });

      setMensajeExito("¡Promoción creada con éxito!");
      alert("¡Promoción creada con éxito!");
      console.log(result);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Error creando la promoción");
      alert("Error creando la promoción. Por favor, verifica los datos e inténtalo nuevamente.");
    }
    console.log("Título:", titulo);
    console.log("Producto:", producto);
    console.log("Porcentaje de descuento:", porcentajeDescuento);
    console.log("Fecha inicio:", fechaInicio);
console.log("Fecha fin:", fechaFin);
console.log("Fecha inicio ISO:", fechaInicio?.toISOString().split("T")[0]);
console.log("Fecha fin ISO:", fechaFin?.toISOString().split("T")[0]);
};
  return (
    <div>
      <div>
        <div className='flex gap-4 ml-20 px-2 mt-6'>
          <TextRegular2 text='Inicio'></TextRegular2>
          <GreaterIcon></GreaterIcon>
          <TextRegular2 text='Registrarse'></TextRegular2>
          <GreaterIcon></GreaterIcon>
          <TextRegular2 text='Promociones'></TextRegular2>
          <GreaterIcon></GreaterIcon>
          <TextRegular text='Crear'></TextRegular>
        </div>
        <div className='flex gap-4 ml-20 px-2 mt-6 mb-8 ' >
          <TextTitle text='Crear Promoción'></TextTitle>
          <div className='flex flex-col px-4 mt-6 '>
            <form className='flex flex-col gap-4 mt-10 justify-between'  onSubmit={(e) => {
    e.preventDefault();  // <-- Evita el reload
    handleGuardar();  
  }}>
              <CreateInput text='Nombre' value={titulo} onChange={(e) => setTitulo(e.target.value)} ></CreateInput>

              <CreateInput3 text="Producto" isDropdown value={producto} onChange={(e) => setProducto(e.target.value)}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                options={data?.productos?.map((prod: any) => ({
                  value: prod.productoId,
                  label: prod.nombre,
                }))}
              />
              <CreateInput text='% Descuento' value={porcentajeDescuento} onChange={(e)=> setPorcentajeDescuento(e.target.value)}></CreateInput>
              <InputDate text='Fecha Inicio' value={fechaInicio ?? undefined} onChange={(date) => setFechaInicio(date ?? null)} error={errors.fechaInicio}></InputDate>
              <InputDate text='Fecha Fin' value={fechaFin ?? undefined} onChange={(date) => setFechaFin(date ?? null)} error={errors.fechaFin} ></InputDate>
              <div className='flex justify-between w-full max-w-md mt-6'>
                <ButtonRounded3 text='Cancelar' className='text-[#F13434] border-[#F13434] border-1 text-bold '  onClick={() => {
    setTitulo('');
    setProducto('');
    setPorcentajeDescuento('');
    setFechaInicio(null);
    setFechaFin(null);
    setErrores({});
    setMensajeExito('');
  }}></ButtonRounded3>
                <ButtonRounded3 text='Guardar' className='bg-[#00B22F] text-white text-bold border-none' onClick={handleGuardar}></ButtonRounded3>
              </div>
            </form>
            {mensajeExito && (
              <p className='text-green-600 mt-4 font-bold'>{mensajeExito}</p> 
            )}
          </div></div>
      </div>
    </div>
  )
};

export default index