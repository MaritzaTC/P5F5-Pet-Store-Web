import React, { useEffect } from 'react'
import { TextRegular10, TextRegular11 } from '../../atoms/Titles'
import { ButtonRounded4 } from '../../atoms/Buttons'
import { IconSuccess } from '../../atoms/Icons'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

const Index = () => {
   const router = useRouter();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login'); // Redirige si no hay token
      }
    }, [router]);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center space-y-4">
        <IconSuccess />
        <TextRegular10 text="¡La cuenta ha sido creada con éxito!" />
        <TextRegular11 text="La cuenta ha sido creada exitosamente. El usuario ya puede" />
        <TextRegular11 text="acceder a nuestros servicios con tus credenciales." />
        <Link href={'/adminpromotions'}>
        <ButtonRounded4 text="Ir a la página principal" />
        </Link>
      </div>
    </div>
  )
}

export default Index