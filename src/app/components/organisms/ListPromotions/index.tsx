import React from 'react'
import { TextRegular, TextRegular2, TextTitle } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons'
import Table from '../../molecules/Table'

export default function index() {
  return (
    <div>
        <div className='flex gap-4 ml-2 sm:ml-10 md:ml-20 px-2 mt-6'>
                <TextRegular2 text='Inicio'></TextRegular2>
                <GreaterIcon></GreaterIcon>
                <TextRegular2 text='Panel de Administardor'></TextRegular2>
                <GreaterIcon></GreaterIcon>
                <TextRegular2 text='Promociones'></TextRegular2>
                <GreaterIcon></GreaterIcon>
                <TextRegular text='Lista'></TextRegular>
            </div>  
            <div className='flex flex-col gap-4 ml-2 sm:ml-10 md:ml-20 px-2 mt-6'>
                    <TextTitle text='Lista de Promociones'></TextTitle>
                       <Table></Table>
            </div>

    </div>
  )
}
