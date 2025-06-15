import React from "react";
import Image from 'next/image';
import { Icon } from '@iconify/react';

const NavIcon = ({ icon }: { icon: string }) => {
    return (
        <div className="flex justify-center items-center">
            <Icon icon={icon} width="37" height="37" className="text-white"/>
        </div>
    );
}


const EyeIcon = ({ icon }: { icon: string }) => {
  return <Icon icon={icon} width="20" height="20" className="text-black" />;
};

const IconSuccess = () => {
  return (
    <svg
      className="w-20 h-20 text-green-600 mx-auto block"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
      <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default IconSuccess

const GreaterIcon = () => {
    return (
        <Image
        src="/Container.png"
        alt="Check mark"
        width={15}
        height={15}
      />
    );
}

const PersonIcon= ({ icon }: { icon: string }) => {
    return (
        <div className="flex justify-center items-center text-amber-400">
            <Icon icon={icon} width="24" height="24" className="text-black"/>
        </div>
    );
}
const CardIcon= ({ icon }: { icon: string }) => {
    return (
        <div className="flex justify-center items-center ">
            <Icon icon={icon} width="106" height="106" className="text-[#7C3785] "/>
        </div>
    );
}
const CardIconImg= ({ url }: { url: string }) => {
    return (
        <Image
        src={url}        
        alt="cards icons"
        width={106}
        height={106}
      />
    );
}


const DateIcon= ({ icon }: { icon: string }) => {
    return (
        <div className="flex justify-center items-center text-amber-400">
            <Icon icon={icon} width="24" height="24" className="text-black"/>
        </div>
    );
}

const AdminIcon= ({ icon }: { icon: string }) => {
    return (
        <div className="flex justify-center items-center">
            <Icon icon={icon} width="53" height="53" className="text-white"/>
        </div>
    );
}

const DeleteIcon= ({ icon }: { icon: string }) => {
    return (
        <div className="flex justify-center items-center">
            <Icon icon={icon} width="100" height="100" className="text-[#E14F4F]"/>
        </div>
    );
}
export { NavIcon,EyeIcon,GreaterIcon, PersonIcon,CardIcon,CardIconImg,DateIcon,AdminIcon,IconSuccess,DeleteIcon};