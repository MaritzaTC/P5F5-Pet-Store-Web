/* eslint-disable react-hooks/rules-of-hooks */


import { TextRegular, TextRegular2, TextTitle2 } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons'
import PromotionsCard from '../../molecules/PromotionsCard'
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import Link from 'next/link';


export default function index() {
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
                <GreaterIcon></GreaterIcon>
                <Link href='/adminfunctions'>
                  <TextRegular text='Panel de administrador'></TextRegular>
                </Link>
                
            </div>
            <div className='flex flex-col items-center justify-center mt-10'>
                <TextTitle2 text='Ofertas y Promociones'></TextTitle2>
                <PromotionsCard></PromotionsCard>
            </div>

        </div>
    )
}
