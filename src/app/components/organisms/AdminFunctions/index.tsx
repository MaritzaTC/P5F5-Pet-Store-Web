import React from 'react'
import { CreateInput2 } from '../../molecules/MiniCard'
import { TextTitle2 } from '../../atoms/Titles'


export default function index() {
    return (
        <div className='flex flex-col items-center justify-center mt-10  '>
            <div className='flex items-center gap-4 w-full max-w-md'>
                <TextTitle2 text='Funciones de Aministrador'></TextTitle2>
            </div>

            <CreateInput2 text={'Ventas'} icon='tabler:zoom-money'></CreateInput2>
            <CreateInput2 text={'Promociones'} icon='tabler:discount-2'></CreateInput2>
            <CreateInput2 text={'Inventario'} icon='tabler:clipboard-list'></CreateInput2>
            <CreateInput2 text={'Usuarios'} icon='tabler:users-group'></CreateInput2>
            <CreateInput2 text={'Extra'} icon='tabler:zoom-money'></CreateInput2>
        </div>
    )
}
