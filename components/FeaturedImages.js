import { imagesLoops } from '@/data'
import React from 'react'
import { ArrowGrey, ArrowPointer } from './Icon'

function FeaturedImages({
  imgMobile,
  imgDesktop,
  titleOne,
  titleTwo,
  content,
  imgContent,
  reverse,
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:justify-between lg:gap-[37px] ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <div className='relative mb-[18.65px]'>
        <div className='relative'>
          <div>
            <img
              className='w-full'
              srcSet={`${imgMobile} 388w, ${imgDesktop} 610w`}
              sizes='(min-width: 768px) 768px,
            (min-width: 430px) 388px,
            278px'
              alt='The Boolean Egyptian'
            />
          </div>
          <h2 className='absolute top-[15%] left-[8.44%] font-clash-display font-semibold text-[30px] leading-[37px] text-white md:hidden'>
            {titleOne}
          </h2>
          <div className='absolute top-[70%] left-[70%] md:hidden'>
            <ArrowPointer />
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex flex-col gap-[18.65px]'>
          <h2 className='hidden md:flex md:text-[40px] md:font-stix-two-text md:font-bold md:leading-[50px] md:text-[#333333]'>
            {titleTwo}
          </h2>
          <p className='w-[343px] font-satoshi font-normal text-[15px] leading-[23px] text-[#616161] md:w-full lg:text-[24px] lg:leading-[32px] lg:w-[540px]'>
            {content}
          </p>
        </div>

        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row gap-[15px] items-center'>
            <div className='-space-x-4'>
              {imagesLoops.map(({ id, img }) => {
                return (
                  <img key={id} className='inline-block' src={img} alt='' />
                )
              })}
            </div>
            <p className='font-satoshi text-base font-medium leading-[22px] text-black'>
              {imgContent}
            </p>
          </div>
          <div>
            <ArrowGrey />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedImages
