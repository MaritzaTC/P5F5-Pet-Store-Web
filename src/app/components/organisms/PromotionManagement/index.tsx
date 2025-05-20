import React from 'react'
import { TextRegular, TextRegular2, TextTitle, TextTitle2 } from '../../atoms/Titles'
import { GreaterIcon } from '../../atoms/Icons';
import { CreateBox } from '../../molecules/SelectionBoxes';

const index = () => {
  return (
    <div>
      <div className='flex gap-4 ml-20 px-2 mt-6'>
        <TextRegular2 text='Inicio' />
        <GreaterIcon />
        <TextRegular2 text='Panel de administrador' />
        <GreaterIcon />
        <TextRegular2 text='Promociones' />
        <GreaterIcon />
        <TextRegular text='Estado' />
      </div>

      <div className='flex flex-col items-start mt-10 ml-32'>
        <TextTitle2 text='Estado de promociones' />
      </div>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
          <CreateBox />
          <CreateBox />
          <CreateBox />
          <CreateBox />
        </div>
      </div>
    </div>
  )
}

export default index