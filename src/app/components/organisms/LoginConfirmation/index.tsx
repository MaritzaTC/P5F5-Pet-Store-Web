import { useRouter } from 'next/router';
import { TextTitle } from '../../atoms/Titles';
import { ButtonCard3 } from '../../atoms/Buttons';

export default function Index() {
  const router = useRouter();
  const { nombreUsuario } = router.query;

  const handleClick = () => {
    router.push('/adminpromotions');
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
