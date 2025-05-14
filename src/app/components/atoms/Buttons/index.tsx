import React from 'react';

const ButtonRounded = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button  className={`rounded-[6px]  px-4 py-2 ${className ?? ''}`}>
      {text}
    </button>
  );
};

export { ButtonRounded };