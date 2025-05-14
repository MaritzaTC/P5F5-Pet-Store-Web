import React from 'react'
import { TextRegular3 } from '../../atoms/Titles'
import { CardIcon } from '../../atoms/Icons'

const cardData = [
    {
        title: 'Crear Promoción Simple',
        icon: 'tabler:calendar-plus',
    },
    {
        title: 'Crear Promoción Por Categoria',
        icon: 'tabler:calendar-plus',
    },
    {
        title: 'Eliminar Promoción',
        icon: 'tabler:calendar-minus',
    },
    {
        title: 'Estado de Promociones',
        icon: 'tabler:calendar-off',
    },
    {
        title: 'Lista de Promociones',
        icon: 'tabler:list-details',
    },
    {
        title: 'Lista de Borradores',
        icon: 'tabler:eraser',
    }
]

export default function Index() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {cardData.map((item)=> (
        <div key={item.title} className='flex flex-col items-center justify-center bg-[#FCFCFC] w-[198px] h-[213px] rounded-[8px] border-[#7C3785] border-2 shadow-md my-2 mx-4 '>
                <TextRegular3 text={item.title}></TextRegular3>
                   <hr className="w-[100px] h-[0.5px] my-3 border-t border-[#7C3785]" />
                <CardIcon icon={item.icon}></CardIcon>
        </div>
        ))}
    </div>
  )
}
