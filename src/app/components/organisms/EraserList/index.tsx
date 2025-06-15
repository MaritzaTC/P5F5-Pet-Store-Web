/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import { TextRegular, TextRegular2, TextTitle2 } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons';
import { CreateBox2 } from '../../molecules/SelectionBoxes';
import { ButtonRounded3 } from '../../atoms/Buttons';
import { TextRegular8 } from '../../atoms/Titles';
import { TextRegular9 } from '../../atoms/Titles';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const index = () => {
   const router = useRouter();
     useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login'); // Redirige si no hay token
        }
      }, [router]);
  return (
    <div>
      <div className='flex gap-4 ml-20 px-2 mt-6'>
       <Link href='/promotions'>
      <TextRegular2 text='Inicio'></TextRegular2>
                </Link>
        <GreaterIcon />
        <TextRegular2 text='Panel de administrador' />
        <GreaterIcon />
        <TextRegular2 text='Promociones' />
        <GreaterIcon />
        <TextRegular text='Borradores' />
      </div>

      <div className='flex flex-col items-start mt-10 ml-32'>
        <TextTitle2 text='Lista de borradores' />
      </div>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6">

            <CreateBox2>
                <div className='mt-2 space-y-1'>
                    <TextRegular8 text='Promoción 1'></TextRegular8>
                    <TextRegular2 text='dd/mm/yy'></TextRegular2>
                    <TextRegular9 text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'></TextRegular9>
                </div>
                <ButtonRounded3 className='bg-[#18181B] text-[#FAFAFA] absolute bottom-4 right-4' text='Eliminar'>
                </ButtonRounded3>
            </CreateBox2>
            <CreateBox2>
                <div className='mt-2 space-y-1'>
                    <TextRegular8 text='Promoción 2'></TextRegular8>
                    <TextRegular2 text='dd/mm/yy'></TextRegular2>
                    <TextRegular9 text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'></TextRegular9>
                </div>
                <ButtonRounded3 className='bg-[#18181B] text-[#FAFAFA] absolute bottom-4 right-4' text='Eliminar'>
                </ButtonRounded3>
            </CreateBox2>
            <CreateBox2>
                <div className='mt-2 space-y-1'>
                    <TextRegular8 text='Promoción 3'></TextRegular8>
                    <TextRegular2 text='dd/mm/yy'></TextRegular2>
                    <TextRegular9 text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'></TextRegular9>
                </div>
                <ButtonRounded3 className='bg-[#18181B] text-[#FAFAFA] absolute bottom-4 right-4' text='Eliminar'>
                </ButtonRounded3>
            </CreateBox2>
            <CreateBox2>
                <div className='mt-2 space-y-1'>
                    <TextRegular8 text='Promoción 4'></TextRegular8>
                    <TextRegular2 text='dd/mm/yy'></TextRegular2>
                    <TextRegular9 text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'></TextRegular9>
                </div>
                <ButtonRounded3 className='bg-[#18181B] text-[#FAFAFA] absolute bottom-4 right-4' text='Eliminar'>
                </ButtonRounded3>
            </CreateBox2> 
        </div>
      </div>
        <div>

        </div>
    </div>
  )
}

export default index