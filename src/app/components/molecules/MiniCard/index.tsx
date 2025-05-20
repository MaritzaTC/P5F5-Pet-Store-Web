import React from 'react'
import { TextRegular7} from '../../atoms/Titles'
import { AdminIcon } from '../../atoms/Icons';




const CreateInput = ({text}: {text: string}) => {
       
    return (
        <div className='flex items-center gap-4 w-full max-w-md'>
            <TextRegular7 text={text}></TextRegular7>
            <input
            type='text'
            className='border border-[#E4E4E7] rounded w-[266px] h-[40px] px-2'
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
export {CreateInput,CreateInput2}