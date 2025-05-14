import React from 'react'
import { TextRegular, TextRegular2, TextTitle2 } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons'
import Card from '../../molecules/Card'

export default function Index() {
    return (
        <div>
            <div className='flex gap-4 ml-2 sm:ml-10 md:ml-20 px-2 mt-6'>
                <TextRegular2 text='Inicio'></TextRegular2>
                <GreaterIcon></GreaterIcon>
                <TextRegular2 text='Panel de Administardor'></TextRegular2>
                <GreaterIcon></GreaterIcon>
                <TextRegular text='Promociones'></TextRegular>
            </div>
            <div className='flex flex-col items-center justify-center mt-10'>
                <TextTitle2 text='Gestión de Promociones'></TextTitle2>
                <div className='grid h-56 grid-rows-3 content-start gap-4 ...'>
                    <Card></Card>
                </div>

            </div>
        </div>
    )
}
