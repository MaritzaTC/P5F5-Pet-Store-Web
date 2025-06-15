import { useRouter } from 'next/router';
import { TextTitle } from '../../atoms/Titles';
import { ButtonCard3 } from '../../atoms/Buttons';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();
 
     useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login'); // Redirige si no hay token
        }
      }, [router]);
  const { nombreUsuario } = router.query;

  const handleClick = () => {
    router.push('/adminfunctions');
  };
  return (
    <div className="flex flex-col gap-4 items-center px-2 mt-6">
      <TextTitle text="Inicio de sesión exitoso." />
      <TextTitle text={`Bienvenido de nuevo, ${nombreUsuario || ''}!`} />

      <ButtonCard3
        text="Explorar ahora"
        className="mt-[44px]"
        onClick={handleClick}
      />
    </div>
  );
}
