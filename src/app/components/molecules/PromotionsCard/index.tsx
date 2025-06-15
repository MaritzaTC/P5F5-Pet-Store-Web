/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { TextRegular2, TextRegular4, TextRegular5, TextRegular6, } from '../../atoms/Titles'
import { Photo } from '../../Img'
import { ButtonRounded, ButtonRounded2 } from '../../atoms/Buttons'
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/app/api/graphql/querys/products';

type Promocion = {
  activa: boolean;
  porcentajeDescuento: number;
};

type Producto = {
  productoId: number;
  nombre: string;
  precio: number;
  promociones: Promocion[];
};

export default function Index() {
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const [paginaActual, setPaginaActual] = React.useState(1);
  if (loading) return <p>Cargando promociones...</p>;
  if (error) return <p>Error al cargar productos</p>;

  

  // Solo productos con promociones activas
  const productosConPromocion = data.productos
    .filter((producto: Producto) =>
      producto.promociones?.some((promo: Promocion) => promo.activa)
    )
    .map((producto: Producto) => {
      const promoActiva = producto.promociones.find((p: Promocion) => p.activa);
      const porcentaje = promoActiva?.porcentajeDescuento || 0;
      const precioDescuento = producto.precio - (producto.precio * porcentaje / 100);

      return {
        productoId: producto.productoId, // NECESARIO
        nombre: producto.nombre,
        precioOriginal: producto.precio,
        porcentajeDescuento: porcentaje,
        precioFinal: precioDescuento,
        image: '/Photo.png',
        marque: 'MARCA',
        title: producto.nombre,
        priceDiscount: `$${precioDescuento.toFixed(2)}`,
        discount: `-${porcentaje}%`,
        price: `$${producto.precio.toFixed(2)}`
      };
    });
const productosPorPagina = 4;
  const totalPaginas = Math.ceil(productosConPromocion.length / productosPorPagina);
  const indiceInicio = (paginaActual - 1) * productosPorPagina;
  const indiceFin = indiceInicio + productosPorPagina;
  const productosPaginados = productosConPromocion.slice(indiceInicio, indiceFin);
  const agregarAlCarrito = (producto: {
    productoId: number;
    nombre: string;
    precioOriginal: number;
    porcentajeDescuento: number;
    precioFinal: number;
  }) => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito') || '[]');

    const existe = carritoActual.find((item: any) => item.productoId === producto.productoId);
    if (existe) {
      existe.cantidad += 1;
    } else {
      carritoActual.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carritoActual));
  };

  return (
    <div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
      {productosPaginados.map((item: {
        productoId: number;
        nombre: string;
        precioOriginal: number;
        porcentajeDescuento: number;
        precioFinal: number;
        image: string;
        marque: string;
        title: string;
        priceDiscount: string;
        discount: string;
        price: string;
      }, index: number) => (
        <div key={index} className='flex flex-col items-start justify-between bg-[#FCFCFC] w-[270px] h-[438px] rounded-[8px] border-[#E4E4E7] border-2 shadow-md my-2 mx-2'>
          <div className='flex flex-col items-start justify-start mx-8 mt-4'>
            <Photo url={item.image} />
            <TextRegular2 text={item.marque} />
            <TextRegular4 text={item.title} />
            <div className='flex gap-2 '>
              <TextRegular5 text={item.priceDiscount} />
              <ButtonRounded2 text={item.discount} />
            </div>
            <TextRegular6 text={item.price} />
          </div>
          <ButtonRounded
            text={'Agregar al carrito'}
            className='bg-[#7C3785] w-[268px] h-[50px] text-white mt-6'
            onClick={() =>
              agregarAlCarrito({
                productoId: item.productoId,
                nombre: item.nombre,
                precioOriginal: item.precioOriginal,
                porcentajeDescuento: item.porcentajeDescuento,
                precioFinal: item.precioFinal,
              })
            }
          />

        </div>
      ))}
     
    </div>
     <div className='w-full flex justify-center items-center gap-4 mt-6'>
        <button
          onClick={() => setPaginaActual((prev) => Math.max(prev - 1, 1))}
          disabled={paginaActual === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <p className="text-gray-700">
          Página {paginaActual} de {totalPaginas}
        </p>
        <button
          onClick={() => setPaginaActual((prev) => Math.min(prev + 1, totalPaginas))}
          disabled={paginaActual === totalPaginas}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
    
  );
}
