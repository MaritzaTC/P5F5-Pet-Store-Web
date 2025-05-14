import React from 'react';

const ButtonRounded = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button  className={`rounded-[6px]  px-4 py-2 ${className ?? ''}`}>
      {text}
    </button>
  );
};

const ButtonRounded2 = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button className={`rounded-full font-bold text-[12px] bg-white w-[59px] h-[22px] text-[#7C3785] border-[#7C3785] border-1 ${className ?? ''}`}>
      {text}
    </button>
  );
}

export { ButtonRounded,ButtonRounded2};