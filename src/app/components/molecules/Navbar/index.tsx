import React from 'react'
import { TextTitleName } from '@/app/components/atoms/Titles/index'
import { NavIcon } from '@/app/components/atoms/Icons/index'

const Index = () => {
    return (
        <div className="bg-[#7C3785] w-full h-[101px] flex items-center justify-between px-8">
            <div className='flex items-center gap-10'>
                <TextTitleName text="PetStore" />
                <NavIcon icon='tabler:baseline-density-medium'></NavIcon>
            </div>
            <div className="flex gap-10 mr-20">
                <NavIcon icon='tabler:logout'></NavIcon>
                <NavIcon icon='tabler:shopping-cart'></NavIcon>
            </div>

        </div>
    )

}

export default Index

