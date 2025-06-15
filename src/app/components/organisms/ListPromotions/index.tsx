/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { TextRegular, TextRegular2, TextTitle } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons'
import Table from '../../molecules/Table'
import Search from '../../molecules/Search'
import { Dropdown } from '../../molecules/Dropdowm'

import Link from 'next/dist/client/link'
import { useRouter } from 'next/dist/client/router'

export default function index() {
 const router = useRouter();
   useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login'); // Redirige si no hay token
      }
    }, [router]);
     const [selectedOption, setSelectedOption] = useState('');
     const [searchText, setSearchText] = useState('');

  return (
    <div>
        <div className='flex gap-4 ml-2 sm:ml-10 md:ml-20 px-2 mt-6'>
               <Link href='/promotions'>
      <TextRegular2 text='Inicio'></TextRegular2>
                </Link>
                  <GreaterIcon></GreaterIcon>
               <Link href='/adminfunctions'>
                        <TextRegular2 text='Panel de Administrador'></TextRegular2>
                    </Link>
                    <GreaterIcon></GreaterIcon>
                    <Link href="/adminpromotions">
                        <TextRegular2 text='Promociones'></TextRegular2>
                    </Link>
                <GreaterIcon></GreaterIcon>
                <TextRegular text='Lista'></TextRegular>
            </div>  
  <div className="flex flex-col gap-4 ml-2 sm:ml-10 md:ml-20 px-2 mt-6">
  <TextTitle text="Lista de Promociones" />
<div className="w-full max-w-screen-lg">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 w-full">
    <div className="w-full lg:flex-1">
     <Search value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    </div>

    {/* Dropdown: full en móvil, fijo en grande */}
    <div className="w-full lg:w-[280px]">
      <Dropdown
        label=""
        name="categoria"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        options={[
          { label: 'Alimentos y nutrición', value: 'Alimentos y nutrición' },
          { label: 'Higiene y cuidado', value: 'Higiene y cuidado' },
          { label: 'Juguetes y entretenimiento', value: 'Juguetes y entretenimiento' },
          { label: 'Accesorios', value: 'Accesorios' },
          { label: 'Salud y bienestar', value: 'Salud y bienestar' },
          { label: 'Hogar y control de olores', value: 'Hogar y control de olores' }
        ]}
        placeholder="Categoría"
      />
    </div>

  </div>
</div>




  <Table categoriaSeleccionada={selectedOption} searchText={searchText} />
</div>


    </div>
  )
}
