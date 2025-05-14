import React, { useState } from 'react';

import { TextRegular, TextRegular2, TextTitle2 } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons'
import PromotionsCard from '../../molecules/PromotionsCard'


export default function index() {

    return (
        <div>
            <div className='flex gap-4 ml-20 px-2 mt-6'>
                <TextRegular2 text='Inicio'></TextRegular2>
                <GreaterIcon></GreaterIcon>
                <TextRegular text='Promociones'></TextRegular>
            </div>
            <div className='flex flex-col items-center justify-center mt-10'>
                <TextTitle2 text='Ofertas y Promociones'></TextTitle2>
                <PromotionsCard></PromotionsCard>
            </div>

        </div>
    )
}
