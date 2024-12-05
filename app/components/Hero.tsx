import React from 'react'
import Svg from './Svg'
import { GrFormNextLink } from 'react-icons/gr'

function Hero() {
  return (
    <div className='w-full  min-h-0  p-2 mt-10 grid grid-cols-2 dark:dark:text-customText-dark'>
        <div className='flex items-start justify-start flex-col p-4 relative'>
            <h1 className='font-extrabold text-[50px] mt-10'><span className='text-customMaincolors-primary'>Finish</span> the read, <span className='text-customMaincolors-primary'>remember</span> the teachings </h1>
            <p className='leading-7 text-sm my-4 w-[80%] tracking-narrower text-customText-light dark:text-customText-dark'>Hey,there are you struggling to start or maintain a good reading culture or you can't remember most things you learnt from a book the moments you finish reading it.We will help you change that,Start the journey with us today for <span className='font-extrabold text-customMaincolors-primary'>free</span> </p>
            <button className='w-[200px] flex items-center justify-center h-[50px] rounded-[40px] mt-4 hover:text-white bg-customMaincolors-primary'><span>get started</span> &nbsp;<GrFormNextLink /></button>
            <span className='text-gray-500 text-[11px] ml-4 dark:text-customText-dark'>💳 no credit card required</span>

        </div>
        <Svg/>
    </div>
  )
}

export default Hero