import React, { ReactNode } from 'react';

const CreateBox = ({ children }: { children?: ReactNode }) => {
  return (
    <div className='relative w-[512px] h-[208px] border-[1px] border-[#00B22F] rounded-[8px] bg-[#F8FFFA] p-4'>
      {children}
    </div>
  );
};

export { CreateBox };