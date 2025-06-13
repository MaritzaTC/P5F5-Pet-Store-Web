import Link from "next/link";
import { ButtonRounded } from "../../atoms/Buttons";
import { GreaterIcon } from "../../atoms/Icons";
import { InputText } from "../../molecules/Inputs";
import { TextRegular, TextRegular2, TextTitle } from "../../atoms/Titles";
import { useMutation } from "@apollo/client";
import { USER_LOGIN } from "@/app/api/graphql/mutations/accounts";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Index() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
   const [loginUsuario] = useMutation(USER_LOGIN);
  const router = useRouter(); 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
try {
  const response = await loginUsuario({
    variables: {
      nombreUsuario,
      contrasena,
    },
  });

  const token = response.data.loginUsuario;
  
  if (!token) {
    alert('Nombre de usuario o contraseña incorrectos');
    return;
  }

  localStorage.setItem('token', token);
  alert('Inicio de sesión exitoso');
  router.push('/adminpromotions');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (error: unknown) {
  alert('No se pudo iniciar sesión. Verifica tus credenciales e inténtalo nuevamente.');
}
  }


  return (
    <div>
            <div className='flex gap-4 ml-20 px-2 mt-6'>
                <TextRegular2 text='Inicio'></TextRegular2>
               <GreaterIcon></GreaterIcon>
                <TextRegular text='Inicio de sesión'></TextRegular>
            </div>
            <div className='flex flex-col items-center justify-center mt-10'>
                <TextTitle text='Iniciar sesión'></TextTitle>
                <form className='flex flex-col gap-4 mt-10' onSubmit={handleLogin}>
                   <InputText type="text" placeholder="Nombre" iconRight="tabler:user" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)}/>
                    <InputText type={'password'} placeholder='Contraseña' value={contrasena} onChange={(e)=>setContrasena(e.target.value)}></InputText>
                    <ButtonRounded text='Iniciar sesión' className='bg-[#7C3785] w-[300px]  text-white mt-6'  type = 'submit'></ButtonRounded>

                    <Link href={'/register'} >
                    <ButtonRounded text='Registrarse' className='bg-white w-[300px] text-[#7C3785] border-[#7C3785] border-1'></ButtonRounded>
                    </Link>
                </form>
            </div>
        </div>
  )
}
