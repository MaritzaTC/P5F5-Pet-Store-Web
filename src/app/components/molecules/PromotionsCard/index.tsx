import React from 'react'
import { TextRegular2, TextRegular4, TextRegular5, TextRegular6, } from '../../atoms/Titles'
import { Photo } from '../../Img'
import { ButtonRounded, ButtonRounded2 } from '../../atoms/Buttons'

const cardData = [
    {
        image: '/Photo.png',
        marque: 'MARCA',
        title: 'Comida Para Perro',
        priceDiscount: '$26.990',
        discount: '-10%',
        price: '$30.000',
    },
    {
        image: '/Photo.png',
        marque: 'MARCA',
        title: 'Comida Para Perro',
        priceDiscount: '$26.990',
        discount: '-10%',
        price: '$30.000',
    },
    {
        image: '/Photo.png',
        marque: 'MARCA',
        title: 'Comida Para Perro',
        priceDiscount: '$26.990',
        discount: '-10%',
        price: '$30.000',
    },
    {
        image: '/Photo.png',
        marque: 'MARCA',
        title: 'Comida Para Perro',
        priceDiscount: '$26.990',
        discount: '-10%',
        price: '$30.000',
    },
   

]

export default function Index() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6 ">
            {cardData.map((item) => (
                <div key={item.title} className='flex flex-col items-start justify-between bg-[#FCFCFC] w-[270px] h-[438px] rounded-[8px] border-[#E4E4E7] border-2 shadow-md my-2 mx-2 '>
                    <div className='flex flex-col items-start justify-start mx-8 mt-4'>
<Photo url={item.image}></Photo>
                    <TextRegular2 text={item.marque}></TextRegular2>
                    <TextRegular4 text={item.title}></TextRegular4>
                    <div className='flex gap-2 '>
                        <TextRegular5 text={item.priceDiscount}></TextRegular5>
                        <ButtonRounded2 text={item.discount}></ButtonRounded2>
                    </div>
   <TextRegular6 text={item.price}></TextRegular6> 
                    </div>
                                     

                  <ButtonRounded text={'Agregar al carrito'} className='bg-[#7C3785] w-[268px]  h-[50px] text-white mt-6'></ButtonRounded>
                </div>
            ))}

        </div>
    )
}
