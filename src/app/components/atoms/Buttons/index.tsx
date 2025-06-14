import React from 'react';

const ButtonRounded = ({ text, className,  ...rest}: { text: string; className?: string} & React.ButtonHTMLAttributes<HTMLButtonElement> ) => {
  return (
    <button  className={`rounded-[6px]  px-4 py-2 ${className ?? ''}`} {...rest}>
      {text}
    </button>
  );
};

const ButtonRounded2 = ({ text, className}: { text: string; className?: string}) => {
  return (
    <button className={`rounded-full font-bold text-[12px] bg-white w-[59px] h-[22px] text-[#7C3785] border-[#7C3785] border-1 ${className ?? ''}`}>
      {text} 
    </button>
  );
};

const ButtonRounded3 = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button  className={`rounded-[6px] font-normal text-[14px] w-[119px] h-[40px]  ${className ?? ''}`}>
      {text}
    </button>
  );
};

const ButtonRounded4 = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button  className={`rounded-[6px] cursor-pointer font-bold text-[14px] text-[#7C3785] w-[300px] h-[44px] border-[1px] border-[#7C3785] ${className ?? ''}`}>
      {text}
    </button>
  );
};

const ButtonCard = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button className={`rounded-full font-bold text-[12px] bg-white w-[59px] h-[22px] text-[#7C3785] border-[#7C3785] border-1 ${className ?? ''}`}>
      {text}
    </button>
  );
};

const ButtonCard2 = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button className={`rounded-[8px] font-bold text-[14px]  w-[84px] h-[36px] text-[#858484] border-[#E4E4E7] border-1 ${className ?? ''}`}>
      {text}
    </button>
  );
};

const ButtonCard3 = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-[6px] font-bold text-[14px] bg-white w-[300px] h-[44px] text-[#7C3785] border border-[#7C3785] cursor-pointer ${className ?? ''}`}
    >
      {text}
    </button>
  );
};

export { ButtonRounded,ButtonRounded2,ButtonRounded3,ButtonCard,ButtonCard2, ButtonCard3};

