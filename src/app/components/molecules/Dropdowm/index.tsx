import React from 'react';
import { TextRegular } from '@/app/components/atoms/Titles/index';
interface DropdownProps {
    label: string;
    name: string;
   options: DropdownOption[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
     placeholder?: string; 
}

interface DropdownOption {
  value: string;
  label: string;
}
export const Dropdown: React.FC<DropdownProps> = ({ label, name, options, value, onChange, className = '', placeholder }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <TextRegular text={label}></TextRegular>
            <select
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required
                className="border-1 border-[#E4E4E7] rounded-md p-2  focus:border-[#E4E4E7]  outline-none"
            >
               <option value="">{placeholder || 'Seleccionar'}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
                ))}
            </select>
        </div>
    );
};
