import React from 'react'
import { TextRegular7} from '../../atoms/Titles'
import { AdminIcon } from '../../atoms/Icons';
import { Dropdown } from '../Dropdowm';




const CreateInput = ({text, value, onChange}: {text: string;  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;}) => {   
    return (
        <div className='flex items-center gap-4 w-full max-w-md '>
            <TextRegular7 text={text}></TextRegular7>
            <input
            type='text'
            className='border rounded-[8px] w-[266px] h-[40px] px-2 focus:border-[#E4E4E7]  outline-none '
            value={value}
            onChange={onChange}
            required
            />
        </div>  
    );
};
                 

const CreateInput2 = ({ text, icon }: { text: string; icon?: string }) => {
    return (
        <div className="flex items-center gap-4 w-full max-w-md my-2">
            <button className="relative rounded-[6px] font-bold text-[20px] text-white bg-[#7C3785] w-[364px] h-[65px]">
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <AdminIcon icon={icon} />
                    </div>
                )}
                <span className="block text-center mx-auto">{text}</span>
            </button>
        </div>
    );
};

interface Option {
  value: string;
  label: string;
}

interface CreateInput3Props {
  text: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  isDropdown?: boolean;
  options?: Option[]; 
  placeholder?: string;
}

const CreateInput3: React.FC<CreateInput3Props> = ({
  text,
  value,
  onChange,
  isDropdown = false,
  options = [],
  placeholder = '',
}) => {
  return (
    <div className='flex items-center gap-4 w-full max-w-md  h-[40px]'>
      <TextRegular7 text={text} />
      {isDropdown ? (
        <Dropdown
        className='w-[266px] h-[44px] hover:bg-accent/50  border-[#E4E4E7]  focus:border-[#E4E4E7]'
          label=''
            placeholder={placeholder}
          name={text}
          options={options.map(option => option.label)}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className='border-none rounded-[8px] w-[266px] h-[40px] px-2 hover:bg-accent/50 '
          value={value}
          onChange={onChange}
          required
        />
      )}
    </div>
  );
};

export {CreateInput,CreateInput2,CreateInput3}