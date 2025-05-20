import React from 'react'
import { TextRegular7} from '../../atoms/Titles'




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


export {CreateInput}