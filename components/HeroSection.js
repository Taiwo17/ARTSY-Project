import React, { useCallback, useEffect, useState } from 'react'

function HeroSection() {
  const [windowSize, setWindowSize] = useState({ width: undefined })
  const [content, setContent] = useState('and')

  const wordChange = () => {
    setContent('&')
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth })
    }
    // console.log(handleResize())
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='flex flex-col gap-[30px] pt-[117px]'>
      <h1 className='font-clash-display font-medium text-[32px] leading-48 text-content-color px-[28px] text-center md:text-[50px] md:font-semibold md:leading-[80px] lg:leading-[125px] lg:px-[183px] lg:text-[80px]'>
        Photography is poetry <span>&</span> beautiful untold stories
      </h1>
      <p className='font-satoshi font-medium text-base leading-[25px] text-center text-menu-color px-[35px] lg:text-[28px] lg:px-[200px] lg:leading-[44px]'>
        Flip through more than 10,000 vintage shots, old photograghs, historic
        images and captures seamlessly in one place. Register to get top access.
      </p>
    </div>
  )
}

export default HeroSection
