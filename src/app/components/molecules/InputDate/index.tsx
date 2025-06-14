import React from 'react'
import { TextRegular7 } from '../../atoms/Titles'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { DateIcon } from '../../atoms/Icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const index = ({text, value, onChange}: {text: string;   value?: Date; onChange: (date: Date | undefined) => void; }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState(false);
  
  return (
    <div>
        <div className='flex items-center gap-x-4'>
            <div>
            <TextRegular7 text={text}></TextRegular7>
            </div>
       <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            id='date'
             className={`w-[266px] h-[42px] justify-between font-normal }`}
          >
            {value ? value.toLocaleDateString() : 'dd/mm/yyyy'}
            <DateIcon icon='tabler:calendar-event' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
          <Calendar
            mode='single'
            selected={value}
            captionLayout='dropdown'
            onSelect={(date) => {
              onChange(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
        </div>
        
    </div>
  )
}

export default index