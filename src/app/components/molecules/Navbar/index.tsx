/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { TextTitleName } from '@/app/components/atoms/Titles/index'
import { NavIcon } from '@/app/components/atoms/Icons/index'
import { useRouter } from 'next/router';

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    // Detectar token al cargar
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            setIsLoggedIn(!!token);
        }
    }, []);

    // Función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        router.push('/login');
    };
    const [carritoCount, setCarritoCount] = useState(0);

useEffect(() => {
  const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
  const total = carrito.reduce((acc: number, item: any) => acc + item.cantidad, 0);
  setCarritoCount(total);
}, []);

    return (
        <div className="bg-[#7C3785] w-screen h-full flex items-center justify-between gap-10 md:px-8 ">
            <div className='flex items-center ml-4 gap-10 sm:ml-10 md:ml-20'>
                <TextTitleName text="PetStore" />
                <NavIcon icon='tabler:baseline-density-medium'></NavIcon>
            </div>
            <div className="flex gap-0 sm:gap-0 md:gap-10 mr-1 sm:mr-10 md:mr-20">
                {isLoggedIn && (
                    <button onClick={handleLogout}>
                        <NavIcon icon='tabler:logout' />
                    </button>
                )}
               <div className="relative">
  <NavIcon icon='tabler:shopping-cart' />
  {carritoCount > 0 && (
    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
      {carritoCount}
    </span>
  )}
</div>

            </div>
        </div>
    )
}

export default Index

