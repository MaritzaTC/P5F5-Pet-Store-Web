/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import { CreateInput2 } from '../../molecules/MiniCard'
import { TextRegular, TextRegular2, TextTitle2 } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'


export default function index() {
     const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // Redirige si no hay token
    }
  }, [router]);
    return (
        <div >
              <div className='flex gap-4 ml-20 px-2 mt-6'>
              <Link href='/promotions'>
      <TextRegular2 text='Inicio'></TextRegular2>
                </Link>
                <GreaterIcon></GreaterIcon>
                <TextRegular text='Panel de Administrador '></TextRegular>
            </div>
            <div className='flex flex-col items-center justify-center mt-10  '>
<div className='flex items-center gap-4 w-full max-w-md my-4'>
                <TextTitle2 text='Funciones de Aministrador'></TextTitle2>
            </div>
<Link href='/next'>
   <CreateInput2 text={'Ventas'} icon='tabler:zoom-money'></CreateInput2>
</Link>
         
            <Link href='/adminpromotions'>
                <CreateInput2 text={'Promociones'} icon='tabler:discount-2'></CreateInput2>
            </Link>
            <Link href='next'>
             <CreateInput2 text={'Inventario'} icon='tabler:clipboard-list'></CreateInput2>
            </Link>
            <Link href='/next'>
            <CreateInput2 text={'Usuarios'} icon='tabler:users-group'></CreateInput2>
            </Link>
            <Link href='/register'>
             <CreateInput2 text={'Crear Usuario'} icon='tabler:user-plus'></CreateInput2>
            </Link>
           
            </div>
            
        </div>
    )
}
