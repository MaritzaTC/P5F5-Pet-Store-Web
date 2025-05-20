import React, { useState } from 'react';
import { TextRegular, TextRegular2, TextTitle } from '../../atoms/Titles'
import { InputText } from '../../molecules/Inputs'
import { ButtonRounded } from '../../atoms/Buttons'
import { Dropdown } from '../../molecules/Dropdowm'
import { GreaterIcon } from '../../atoms/Icons';
import Link from 'next/link';
export default function Index() {
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <div>
            <div className='flex gap-4 ml-20 px-2 mt-6'>
                <TextRegular2 text='Inicio'></TextRegular2>
               <GreaterIcon></GreaterIcon>
                <TextRegular text='Registrarse'></TextRegular>
            </div>
            <div className='flex flex-col items-center justify-center mt-10'>
                <TextTitle text='Registrarse'></TextTitle>
                <form className='flex flex-col gap-4 mt-10'>
                    <InputText type={'text'} placeholder='Nombre completo'  ></InputText>
                    <InputText type={'password'} placeholder='Contraseña'></InputText>
                    <Dropdown label={''}  placeholder="Seleccionar rol" name={selectedOption} options={['Administrador', 'Gestor de promociones', 'Lector']} value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} ></Dropdown>
                    <ButtonRounded text='Crear cuenta' className='bg-[#7C3785]  text-white'></ButtonRounded>
                    <Link href={'/login'} >
                    <ButtonRounded text='Iniciar sesión' className='bg-white w-[300px] text-[#7C3785] border-[#7C3785] border-1'></ButtonRounded>
                    </Link>
                </form>
            </div>
        </div>
    )
}
