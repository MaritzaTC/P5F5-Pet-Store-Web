/* eslint-disable @typescript-eslint/no-unused-vars */

import { ButtonRounded } from "../../atoms/Buttons";
import { GreaterIcon } from "../../atoms/Icons";
import { ValidatedInputText } from "../../molecules/Inputs";
import { TextRegular, TextRegular2, TextTitle } from "../../atoms/Titles";
import { useMutation } from "@apollo/client";
import { USER_LOGIN } from "@/app/api/graphql/mutations/accounts";
import { useRouter } from "next/router";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import Link from "next/dist/client/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Index() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [loginUsuario] = useMutation(USER_LOGIN);
  const router = useRouter();
  const [errores, setErrores] = useState<{ nombreUsuario?: string; contrasena?: string }>({});
  const [mensajeError, setMensajeError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const nuevosErrores: { nombreUsuario?: string; contrasena?: string } = {};
    if (!nombreUsuario) nuevosErrores.nombreUsuario = "Este campo es obligatorio";
    if (!contrasena) nuevosErrores.contrasena = "Este campo es obligatorio";

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setErrores({});

    try {
      setLoading(true);
      const response = await loginUsuario({
        variables: {
          nombreUsuario,
          contrasena,
        },
      });

      const token = response?.data?.loginUsuario;

      if (!token) {
        setMensajeError('Nombre de usuario o contraseña incorrectos');
        setLoading(false);
        return;
      }

      localStorage.setItem('token', token);
      router.push({
        pathname: '/loginconfirmation',
        query: { nombreUsuario },
      });

    } catch (error) {
      setMensajeError('No se pudo iniciar sesión. Verifica tus credenciales e inténtalo nuevamente.');
    }
  };

  return (
    <div>
      <div className="flex gap-4 ml-20 px-2 mt-6">
       <Link href='/promotions'>
      <TextRegular2 text='Inicio'></TextRegular2>
                </Link>
        <GreaterIcon />
        <TextRegular text="Inicio de sesión" />
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <TextTitle text="Iniciar sesión" />

        <form className="flex flex-col gap-4 mt-10" onSubmit={handleLogin}>
          <ValidatedInputText
            type="text"
            placeholder="Nombre"
            iconRight="tabler:user"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            isError={!!errores.nombreUsuario}
            errorMessage={errores.nombreUsuario}
          />

          <ValidatedInputText
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            isError={!!errores.contrasena}
            errorMessage={errores.contrasena}
          />

          <ButtonRounded
            text={loading ? "Iniciando..." : "Iniciar sesión"}
            className="bg-[#7C3785] w-[300px] text-white mt-2 flex items-center justify-center gap-2"
            type="submit"
            disabled={loading}
          />



        </form>
        {mensajeError && (
          <Alert variant="destructive" className="mt-4 max-w-xl">
            <AlertCircleIcon className="h-5 w-5" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {mensajeError}
            </AlertDescription>
          </Alert>
        )}
           {loading && <Icon icon="tabler:loader" className="animate-spin text-purple-700" width={24} height={24} />}
      </div>
    </div>
  );
}
