import React from 'react'
import { TextRegular, TextRegular2, TextTitle } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons';
import { CreateInput } from '../../molecules/MiniCard';
import InputDate from '../../molecules/InputDate';
import { ButtonRounded3 } from '../../atoms/Buttons';


const index = () => (
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
                <form className='flex flex-col gap-4 mt-10 justify-between'>
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

export default index