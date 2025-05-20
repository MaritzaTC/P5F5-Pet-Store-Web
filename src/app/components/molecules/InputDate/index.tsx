import React from 'react'
import { TextRegular7 } from '../../atoms/Titles'
import { DateIcon } from '../../atoms/Icons'

const index = ({text}: {text: string}) => {
  return (
    <div>
        <div className='flex items-center gap-x-4'>
            <div>
            <TextRegular7 text={text}></TextRegular7>
            </div>
            <div className="relative ">
            <div className="absolute pr-2 inset-y-0 end-0 flex items-center ps-3 pointer-events-none">
               <DateIcon icon={'tabler:calendar-event'}></DateIcon>
            </div>
            <input id='default-datepicker'
                type="text" 
                className="border border-gray-300 
                text-gray-900 w-[266px] h-[40px]
                pl-4"
                placeholder="dd/mm/yyyy"
            />
            <div id="datepicker-inline" inline-datepicker data-date="02/25/2024"></div>
            </div>
        </div>
    </div>
  )
}

export default index