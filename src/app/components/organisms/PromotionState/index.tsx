import React from 'react'
import { TextRegular, TextRegular2, TextTitle } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons';

const index = () => (
    <div>
        <div>
            <div className='flex gap-4 ml-20 px-2 mt-6'>
                <TextRegular2 text='Inicio'></TextRegular2>
                <GreaterIcon></GreaterIcon>
                <TextRegular2 text='Panel de Administrador'></TextRegular2>
                <GreaterIcon></GreaterIcon>
                <TextRegular2 text='Promociones'></TextRegular2>
                <GreaterIcon></GreaterIcon>
                <TextRegular text='Estado'></TextRegular>
            </div>
        </div>
    </div>

)

export default index