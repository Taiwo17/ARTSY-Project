import React from 'react'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Rounded } from './Icon'
import { imgSlider } from '@/data'

function SliderEvent() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    arrows: false,
  }
  return (
    <div className='relative bg-event-sub-img bg-cover bg-no-repeat h-full py-[33px] pl-[11px] mx-[34px] md:pl-[22px] md:pr-[22px] lg:h-[546px] lg:bg-event-sub_desktop lg:pt-[299px] lg:mx-[120px] '>
      <div>
        <Slider {...settings}>
          {imgSlider.map((eventSlide) => {
            const { id, title, number, date, content, link, reminder } =
              eventSlide
            return (
              <div className='pl-2 pt-[33px]' key={id}>
                <div className='flex flex-row gap-[29.03px] mb-[26px]'>
                  <Rounded />
                  <p className='font-bellefair font-normal text-[20px] text-white leading-[25px] w-[248px] tracking-normal md:w-full md:text-[30px]'>
                    {title}
                  </p>
                </div>
                <div className='flex flex-row gap-3'>
                  <div>
                    <p className='font-bellefair font-normal text-[45px] leading-[46px] text-[#e1e1e1] md:text-[50px]'>
                      {number}
                    </p>
                  </div>
                  <div className='flex flex-col lg:flex-row lg:items-center lg:gap-[118.08px]'>
                    <div className='flex flex-col gap-[20px]'>
                      <p className='font-poppins font-lighter text-xs leading-[18px] text-white uppercase tracking-widest md:text-sm'>
                        {date}
                      </p>
                      <p className='font-satoshi font-normal text-[10px] tracking-[0.065em] uppercase text-white leading-[20px] w-[287px] md:text-base md:w-full lg:w-[628.85px]'>
                        {content}
                      </p>
                    </div>
                    <div className='flex flex-row justify-end gap-[36px]'>
                      <button className='font-satoshi font-normal text-sm leading-[19px] underline text-white tracking-wide md:text-base'>
                        {link}
                      </button>
                      <button className='font-satoshi font-normal text-sm leading-[19px]  text-white tracking-wide border border-white px-[6px] py-[8px] rounded-[10px] md:text-base lg:py-[15px] lg:px-[13px] '>
                        {reminder}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default SliderEvent
