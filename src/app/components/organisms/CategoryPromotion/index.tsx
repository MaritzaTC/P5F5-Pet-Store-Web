import React, { useState } from 'react'
import { TextRegular, TextRegular2, TextRegular7, TextTitle } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons'
import { CreateInput } from '../../molecules/MiniCard'
import InputDate from '../../molecules/InputDate'
import { ButtonRounded3 } from '../../atoms/Buttons'
import { Dropdown } from '../../molecules/Dropdowm'

export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedOption, setSelectedOption] = useState('');
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
            <div className='flex gap-4 ml-20 px-2 mt-6 mb-8 ' >  <div className='flex flex-col px-4 mt-6 '>
                    <TextTitle text='Crear Promoción por Categoría'></TextTitle>
                    
                <form className='flex flex-col gap-4 mt-10 justify-between'>
                    <div className='flex items-center gap-4 w-full max-w-md'>
                           <TextRegular7 text='Categoría'></TextRegular7>
                     <Dropdown className='w-[266px]' label={''} name={selectedOption} options={['Administrador', 'Gestor de promociones', 'Lector']} value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} ></Dropdown>
                    </div>
                    <CreateInput text='Nombre'></CreateInput>
                    <CreateInput text='Producto'></CreateInput>
                    <CreateInput text='% Descuento'></CreateInput>
                    <InputDate text='Fecha Inicio'></InputDate>
                    <InputDate text='Fecha Fin'></InputDate>
                    <div className='flex justify-between w-full max-w-md mt-6'>
                        <ButtonRounded3 text='Cancelar' className='text-[#F13434] border-[#F13434] border-1 text-bold '></ButtonRounded3>
                        <ButtonRounded3 text='Guardar' className='bg-[#00B22F] text-white text-bold border-none'></ButtonRounded3>
                    </div>
                </form>
            </div></div>
        </div>
    </div>
  )
}
