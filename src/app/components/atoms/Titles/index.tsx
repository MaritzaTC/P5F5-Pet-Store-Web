import React from 'react'

const TextTitleName = ({text}: {text: string}) => {
    return (
        <h1 className=' text-[48px] font-bold text-white '>
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
const TextTitle2 = ({text}: {text: string}) => {
    return (
        <h1 className='text-[24px] font-semibold'>
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
const TextRegular3 = ({text}: {text: string}) => {
    return (
        <h1 className='text-[19px] font-semibold text-[#7C3785] text-center mx-4 '>
           {text}
        </h1>
    );
};
const TextRegular4 = ({text}: {text: string}) => {
    return (
        <h1 className='text-[19px] font-semibold  '>
           {text}
        </h1>
    );
};
const TextRegular5 = ({text}: {text: string}) => {
    return (
        <h1 className='text-[19px] font-semibold  text-[#71717A]  '>
           {text}
        </h1>
    );
};
const TextRegular6 = ({ text }: { text: string }) => {
  return (
    <h1 className="relative inline-block text-[15px] font-semibold text-[#71717A]">
      {text}
      <span className="absolute top-1/2 left-0 w-full border-t-2 border-[#71717A] transform -translate-y-1/2"></span>
    </h1>
  );
};

export  {TextTitleName, TextTitle,TextTitle2, TextRegular,TextRegular2,TextRegular3,TextRegular4,TextRegular5,TextRegular6}