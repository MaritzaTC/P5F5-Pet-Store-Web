import React from 'react'

const TextTitleName = ({text}: {text: string}) => {
    return (
        <h1 className='ml-20 text-[48px] font-bold text-white '>
           {text}
        </h1>
    );
};

const TextTitle = ({text}: {text: string}) => {
    return (
        <h1 className='text-[30px] font-bold'>
           {text}
        </h1>
    );
};

const TextRegular = ({text}: {text: string}) => {
    return (
        <h1 className='text-[14px] font-normal'>
           {text}
        </h1>
    );
};
const TextRegular2 = ({text}: {text: string}) => {
    return (
        <h1 className='text-[14px] font-normal text-[#71717A]'>
           {text}
        </h1>
    );
};

export  {TextTitleName, TextTitle, TextRegular,TextRegular2}