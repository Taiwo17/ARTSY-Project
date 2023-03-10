import Link from 'next/link'
import React from 'react'
import { ArrowColor, ArrowExplore } from './Icon'

function ExploreSection({ title }) {
  return (
    <>
      <div className='pl-2 pr-[35px] my-6 md:px-12 lg:my-[30px] lg:pl-[78px] lg:pr-[293px]'>
        <div className='flex flex-row items-center justify-between'>
          <h3 className='font-satoshi font-medium text-[24px] leading-[32px] text-menu-color lg:text-[48px] lg:leading-[65px] lg:text-[#333333]'>
            {title}
          </h3>
          <div className='pt-4 pb-[15px] pl-[9px] pr-[15px] border border-black rounded-[50%] lg:border-none lg:rounded-none'>
            <Link className='lg:hidden' href={'/'}>
              <ArrowExplore />
            </Link>
            <Link className='hidden lg:flex' href={'/'}>
              <ArrowColor />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExploreSection
