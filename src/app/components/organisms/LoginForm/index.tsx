import Link from "next/link";
import { ButtonRounded } from "../../atoms/Buttons";
import { GreaterIcon } from "../../atoms/Icons";
import { InputText } from "../../molecules/Inputs";
import { TextRegular, TextRegular2, TextTitle } from "../../atoms/Titles";

export default function Index() {
 
  return (
    <div>
            <div className='flex gap-4 ml-20 px-2 mt-6'>
                <TextRegular2 text='Inicio'></TextRegular2>
               <GreaterIcon></GreaterIcon>
                <TextRegular text='Inicio de sesión'></TextRegular>
            </div>
            <div className='flex flex-col items-center justify-center mt-10'>
                <TextTitle text='Iniciar sesión'></TextTitle>
                <form className='flex flex-col gap-4 mt-10'>
                   <InputText type="text" placeholder="Nombre" iconRight="tabler:user" />
                    <InputText type={'password'} placeholder='Contraseña'></InputText>
                    
                    <ButtonRounded text='Iniciar sesión' className='bg-[#7C3785]  text-white mt-6' ></ButtonRounded>
                    <Link href={'/login'} >
                    <ButtonRounded text='Registrarse' className='bg-white w-[300px] text-[#7C3785] border-[#7C3785] border-1'></ButtonRounded>
                    </Link>
                </form>
            </div>
        </div>
  )
}
