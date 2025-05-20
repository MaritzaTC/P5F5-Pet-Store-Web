import React, { useState } from 'react'
import { TextRegular, TextRegular2, TextTitle } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons'
import Table from '../../molecules/Table'
import Search from '../../molecules/Search'
import { Dropdown } from '../../molecules/Dropdowm'
import { ButtonCard2 } from '../../atoms/Buttons'

export default function index() {
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [selectedOption, setSelectedOption] = useState('');
  return (
    <div>
        <div className='flex gap-4 ml-2 sm:ml-10 md:ml-20 px-2 mt-6'>
                <TextRegular2 text='Inicio'></TextRegular2>
                <GreaterIcon></GreaterIcon>
                <TextRegular2 text='Panel de Administardor'></TextRegular2>
                <GreaterIcon></GreaterIcon>
                <TextRegular2 text='Promociones'></TextRegular2>
                <GreaterIcon></GreaterIcon>
                <TextRegular text='Lista'></TextRegular>
            </div>  
            <div className='flex flex-col gap-4 ml-2 sm:ml-10 md:ml-20 px-2 mt-6'>
                    <TextTitle text='Lista de Promociones'></TextTitle>
                    <div className='flex items-center justify-between w-[1201px] ml-4'>
                        <Search></Search>
                    <Dropdown
  className="w-[266px]"
  label=""
  name="categoria"
  value={selectedOption}
  onChange={(e) => setSelectedOption(e.target.value)}
  options={[
    'Alimentos y nutrición',
    'Higiene y cuidado',
    'Juguetes y entretenimiento',
    'Accesorios',
    'Salud y bienestar',
    'Hogar y control de olores'
  ]}
  placeholder="Categoría" // ← aquí defines el texto
/>
                    </div>
                       <Table></Table>
                       <div className='flex items-center justify-end w-[1201px] ml-4 gap-10'>
  <ButtonCard2 text={'Anterior'}></ButtonCard2>
                         <ButtonCard2 text={'Siguiente'}></ButtonCard2>
                       </div>
                     
            </div>

    </div>
  )
}
