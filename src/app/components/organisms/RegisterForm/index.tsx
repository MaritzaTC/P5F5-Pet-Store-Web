import React, { useState } from 'react';
import { TextRegular, TextRegular2, TextTitle } from '../../atoms/Titles'
import { InputText } from '../../molecules/Inputs'
import { Icon } from '@iconify/react';
import { ButtonRounded } from '../../atoms/Buttons'
import { Dropdown } from '../../molecules/Dropdowm'
import { GreaterIcon } from '../../atoms/Icons';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { INSERTAR_USUARIO } from '@/app/api/graphql/mutations/accounts';
export default function Index() {
    const [selectedOption, setSelectedOption] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const [insertarUsuario, { loading, error }] = useMutation(INSERTAR_USUARIO);
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await insertarUsuario({
        variables: {
          input: {
            nombreUsuario,
            contrasena,
            rol: selectedOption.toUpperCase().replace(/\s+/g, '_'), 
            estado: 'ACTIVO',
          },
        },
      });
      
      alert('Usuario creado exitosamente');
      // limpiar formulario 
    setNombreUsuario('');
    setContrasena('');
    setSelectedOption('');
    } catch (err) {
      console.error('Error al crear usuario:', err);
    }
  };

    return (
        <div>
            <div className='flex gap-4 ml-20 px-2 mt-6'>
                <TextRegular2 text='Inicio'></TextRegular2>
               <GreaterIcon></GreaterIcon>
                <TextRegular text='Registrarse'></TextRegular>
            </div>
            <div className='flex flex-col items-center justify-center mt-10'>
                <TextTitle text='Registrarse'></TextTitle>
                <form className='flex flex-col gap-4 mt-10 pb-4' onSubmit={handleSubmit}>
                    <InputText type={'text'} placeholder='Nombre completo' value={nombreUsuario}  onChange={(e) => setNombreUsuario(e.target.value)}></InputText>
                    <InputText type={'password'} placeholder='Contraseña' value={contrasena} onChange={(e)=> setContrasena(e.target.value)}></InputText>
                    <Dropdown label={''}  placeholder="Seleccionar rol" name={selectedOption} options={['Administrador', 'Gestor de promociones', 'Lector']} value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} ></Dropdown>
                    <ButtonRounded text='Crear cuenta' className='bg-[#7C3785]  text-white'></ButtonRounded>
                    <Link href={'/login'} >
                    <ButtonRounded text='Iniciar sesión' className='bg-white w-[300px] text-[#7C3785] border-[#7C3785] border-1'></ButtonRounded>
                    </Link>
                </form>
              {loading && <Icon icon="tabler:loader" className="animate-spin text-purple-700" width={24} height={24} />}
{error && <p>Error al crear usuario, inténtelo de nuevo </p>}
            </div>
        </div>
    )
}
