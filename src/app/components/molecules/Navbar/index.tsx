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
                <NavIcon icon='tabler:shopping-cart'></NavIcon>
            </div>
        </div>
    )
}

export default Index

