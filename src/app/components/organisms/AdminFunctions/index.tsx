import React from 'react'
import { CreateInput2 } from '../../molecules/MiniCard'
import { TextRegular, TextRegular2, TextTitle2 } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons'
import Link from 'next/dist/client/link'


export default function index() {
    return (
        <div >
              <div className='flex gap-4 ml-20 px-2 mt-6'>
                <TextRegular2 text='Inicio'></TextRegular2>
                <GreaterIcon></GreaterIcon>
                <TextRegular text='Panel de Administrador '></TextRegular>
            </div>
            <div className='flex flex-col items-center justify-center mt-10  '>
<div className='flex items-center gap-4 w-full max-w-md my-4'>
                <TextTitle2 text='Funciones de Aministrador'></TextTitle2>
            </div>

            <CreateInput2 text={'Ventas'} icon='tabler:zoom-money'></CreateInput2>
            <Link href='/adminpromotions'>
                <CreateInput2 text={'Promociones'} icon='tabler:discount-2'></CreateInput2>
            </Link>
            <CreateInput2 text={'Inventario'} icon='tabler:clipboard-list'></CreateInput2>
            <Link href='/register'>
            <CreateInput2 text={'Usuarios'} icon='tabler:users-group'></CreateInput2>
            </Link>
            
            <CreateInput2 text={'Extra'} icon='tabler:zoom-money'></CreateInput2>
            </div>
            
        </div>
    )
}
