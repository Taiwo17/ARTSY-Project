import { imagesLoops } from '@/data'
import React from 'react'
import { ArrowGrey } from './Icon'

function ImageLoop() {
  return (
    <div className='flex flex-col gap-[18.65px]'>
      <div className='flex flex-col gap-[18.65px]'>
        <h2 className='hidden md:flex md:text-[40px] md:font-stix-two-text md:font-bold md:leading-[50px] md:text-[#333333]'>
          The Boolean Egyptian
        </h2>
        <p className='w-[343px] font-satoshi font-normal text-[15px] leading-[23px] text-[#616161] md:w-full lg:text-[24px] lg:leading-[32px] lg:w-[540px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor pur
        </p>
      </div>

      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-[15px] items-center'>
          <div className='-space-x-4'>
            {imagesLoops.map(({ id, img }) => {
              return <img key={id} className='inline-block' src={img} alt='' />
            })}
          </div>
          <p className='font-satoshi text-base font-medium leading-[22px] text-black'>
            64 major creators
          </p>
        </div>
        <div>
          <ArrowGrey />
        </div>
      </div>
    </div>
  )
}

export default ImageLoop
