import { ACTUALIZAR_PROMOCION, ELIMINAR_PROMOCION } from '@/app/api/graphql/mutations/promotions';
import { GET_PROMOCIONES } from '@/app/api/graphql/querys/promotions';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { useMutation, useQuery } from '@apollo/client';


import React, { useState } from 'react'
import { TextRegular, } from '../../atoms/Titles';
import { DeleteIcon } from '../../atoms/Icons';
import { useRouter } from 'next/router';


interface TableProps {
  categoriaSeleccionada?: string;
  searchText?: string;
}

export default function Index({ categoriaSeleccionada, searchText }: TableProps) {
  
  const [paginaActual, setPaginaActual] = useState(1);
  const [menuVisible, setMenuVisible] = useState<{ [key: string]: boolean }>({});
const [dialogOpen, setDialogOpen] = useState(false);
const [promoAEliminar, setPromoAEliminar] = useState<string | null>(null);
 const { data: promocionesData, loading, error, refetch } = useQuery(GET_PROMOCIONES, {
  fetchPolicy: 'network-only'
});
  const [actualizarPromocion] = useMutation(ACTUALIZAR_PROMOCION);
  const [eliminarPromocion] = useMutation(ELIMINAR_PROMOCION);
 const router = useRouter();

  const promocionesPorPagina = 5;

  const promociones = promocionesData?.promociones ?? [];
 const promocionesFiltradas = promociones.filter((promo: { categoria: string; titulo: string; }) => {
    const coincideCategoria = categoriaSeleccionada ? promo.categoria === categoriaSeleccionada : true;
    const coincideTexto = searchText ? promo.titulo.toLowerCase().includes(searchText.toLowerCase()) : true;
    return coincideCategoria && coincideTexto;
  });
  const totalPaginas = Math.ceil(promocionesFiltradas.length / promocionesPorPagina);
  const indiceInicio = (paginaActual - 1) * promocionesPorPagina;
  const indiceFin = indiceInicio + promocionesPorPagina;
  const promocionesPaginadas = promocionesFiltradas.slice(indiceInicio, indiceFin);


  
  if (loading) return <p>Cargando promociones...</p>;
  if (error) return <p>Error al cargar promociones: {error.message}</p>;





 

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEstadoChange = async (event: React.ChangeEvent<HTMLSelectElement>, promo: any) => {
    const nuevoEstado = event.target.value === 'Activo';
    try {
      await actualizarPromocion({
        variables: {
          id: promo.promocionId,
          input: {
            activa: nuevoEstado,
            titulo: promo.titulo,
            porcentajeDescuento: promo.porcentajeDescuento,
            fechaInicio: promo.fechaInicio,
            fechaFin: promo.fechaFin,
            categoria: promo.categoria || '',
          },
        },
      });
      refetch();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      console.error('Error al actualizar estado:');
    }
  };

  return (
    <div className="p-4">
     <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
  <DialogContent className="sm:max-w-md">
   <DialogHeader className="flex flex-col items-center justify-center gap-4">
  <DeleteIcon icon='tabler:alert-circle' />
  <DialogTitle className="text-center">
    ¿Estás seguro de que quieres eliminar esto de manera permanente?
  </DialogTitle>
</DialogHeader>

    <DialogFooter className="sm:justify-center">
     
      <button
        onClick={async () => {
          try {
            await eliminarPromocion({ variables: { id: promoAEliminar } });
            setDialogOpen(false);
            setMenuVisible({});
            await refetch();
          } catch (error) {
            console.error("Error al eliminar la promoción:", error);
          }
        }}
        className="px-4 py-2 rounded bg-[#E14F4F] text-white hover:bg-red-500"
      >
        <TextRegular text={'¡Si, eliminar!'} ></TextRegular>
        
      </button>
       <DialogClose asChild>
        <button
          onClick={() => setDialogOpen(false)}
          className="px-4 py-2 rounded  border-[#7C3785] border-2  hover:bg-gray-100 text-[#7C3785]"
        >
            <TextRegular text={'Cancelar'} ></TextRegular>
        </button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>



      <div className="overflow-x-auto">
 <table className="min-w-full table-auto border border-gray-300">
        <thead>
          <tr className='h-[48px]'>
            <th className="border py-2">Estado</th>
            <th className="border py-2">Nombre</th>
            <th className="border py-2">Producto</th>
            <th className="border py-2">Descuento</th>
            <th className="border py-2">Fecha Inicio</th>
            <th className="border py-2">Fecha Fin</th>
            <th className="border py-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {promocionesPaginadas.map((promo: {
            promocionId: string;
            activa: boolean;
            titulo: string;
            productos: { nombre: string }[];
            porcentajeDescuento: number;
            fechaInicio: string;
            fechaFin: string;
            categoria?: string;
          }, index: number) => (
            <tr key={index} className="text-center">
              <td className="border py-2">
                <select
                  value={promo.activa ? 'Activo' : 'Inactivo'}
                  onChange={(e) => handleEstadoChange(e, promo)}
                  className="border px-2 py-1 rounded"
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </td>
              <td className="border py-2">{promo.titulo}</td>
              <td className="border py-2">
                {promo.productos.map((prod) => prod.nombre).join(', ')}
              </td>
              <td className="border py-2">{promo.porcentajeDescuento}%</td>
              <td className="border py-2">{promo.fechaInicio}</td>
              <td className="border py-2">{promo.fechaFin}</td>
              <td className="border py-2 relative">
  <div className="relative inline-block text-left">
    <button
      onClick={() =>
        setMenuVisible((prev) => ({
          ...prev,
          [promo.promocionId]: !prev[promo.promocionId],
        }))
      }
      className="px-2 py-1  rounded"
    >
      ...
    </button>
    {menuVisible[promo.promocionId] && (
      <div className="absolute right-0 mt-2 w-32 bg-white border rounded-2xl shadow-lg z-10">
    <button
  onClick={() => {
    setPromoAEliminar(promo.promocionId);
    setDialogOpen(true);
  }}
  className="px-4 py-2 w-full text-left bg-white hover:bg-gray-100 transition-colors duration-200"
>
  Eliminar
</button>


       <button
  onClick={() => router.push(`/editpromotion/${promo.promocionId}`)}
  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
>
  Editar
</button>

       
      </div>
    )}
  </div>
</td>

            </tr>
          ))}
        </tbody>
      </table>
       {/* Navegación de páginas */}
      <div className='flex items-center justify-end  ml-4 mt-10 gap-10 space-x-2'>
        <button
          onClick={() => setPaginaActual((prev) => Math.max(prev - 1, 1))}
          disabled={paginaActual === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <p className="text-gray-700">Página {paginaActual} de {totalPaginas}</p>
        <button
          onClick={() => setPaginaActual((prev) => Math.min(prev + 1, totalPaginas))}
          disabled={paginaActual === totalPaginas}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 "
        >
          Siguiente
        </button>


      </div>
      </div>
     

     
    </div>
  );
}