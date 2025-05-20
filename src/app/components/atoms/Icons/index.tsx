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

export { NavIcon,EyeIcon,GreaterIcon, PersonIcon,CardIcon,CardIconImg,DateIcon};