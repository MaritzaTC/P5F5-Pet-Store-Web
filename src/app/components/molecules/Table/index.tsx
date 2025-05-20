import React from 'react'
const data = [
    {
        status: 'Inactivo',
        name: 'Promocion 1',
        product: 'Producto',
        discount: '1%',
        startDate: '2023-10-01',
        endDate: '2023-10-31',
        button: '...',
    },
    {
status: 'Activo',
        name: 'Promocion 2',
        product: 'Producto',
        discount: '1%',
        startDate: '2023-10-01',
        endDate: '2023-10-31',
        button: '...',
    },
    {
        status: 'Inactivo',
        name: 'Promocion 3',
        product: 'Producto',
        discount: '1%',
        startDate: '2023-10-01',
        endDate: '2023-10-31',
        button: '...',
    },
    {
        status: 'Activo',
        name: 'Promocion 4',
        product: 'Producto',
        discount: '1%',
        startDate: '2023-10-01',
        endDate: '2023-10-31',
        button: '...',
    },
    {
        status: 'Activo',
        name: 'Promocion 5',
        product: 'Producto',
        discount: '1%',
        startDate: '2023-10-01',
        endDate: '2023-10-31',
        button: '...',
    },

]


export default function Index() {
  return (
    <div className="p-4">
      <table className="table-auto w-[1200px] border border-gray-300">
        <thead>
          <tr >
            <th className="border border-[#E4E4E7] py-2 ">Estado</th>
            <th className="border border-[#E4E4E7] py-2  ">Nombre</th>
            <th className="border border-[#E4E4E7] py-2 ">Producto</th>
            <th className="border border-[#E4E4E7] py-2 ">Descuento</th>
            <th className="border border-[#E4E4E7] py-2 ">Fecha Inicio</th>
            <th className="border border-[#E4E4E7] py-2 ">Fecha Fin</th>
            <th className="border border-[#E4E4E7] py-2 ">Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-[#E4E4E7] py-4 ">{item.status}</td>
              <td className="border border-[#E4E4E7] py-2 ">{item.name}</td>
              <td className="border border-[#E4E4E7] py-2 ">{item.product}</td>
              <td className="border border-[#E4E4E7] py-2 ">{item.discount}</td>
              <td className="border border-[#E4E4E7] py-2 ">{item.startDate}</td>
              <td className="border border-[#E4E4E7] py-2 ">{item.endDate}</td>
              <td className="border border-[#E4E4E7] py-2 ">
                <button>{item.button}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}