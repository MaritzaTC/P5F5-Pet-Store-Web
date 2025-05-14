import React from 'react'
import { TextTitleName } from '@/app/components/atoms/Titles/index'
import { NavIcon } from '@/app/components/atoms/Icons/index'

const Index = () => {
    return (
        <div className="bg-[#7C3785] w-screen h-[101px] flex items-center justify-between md:px-8">
            <div className='flex items-center ml-4 sm:ml-10 md:ml-20'>
                <TextTitleName text="PetStore" />
                <NavIcon icon='tabler:baseline-density-medium'></NavIcon>
            </div>
            <div className="flex gap-0 sm:gap-0 md:gap-10 mr-1 sm:mr-10 md:mr-20">
                <NavIcon icon='tabler:logout'></NavIcon>
                <NavIcon icon='tabler:shopping-cart'></NavIcon>
            </div>
        </div>
    )
}

export default Index

