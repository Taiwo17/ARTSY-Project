import Link from 'next/link'
import React from 'react'
import { CloseMenu, MessageIcon } from './Icon'
import { useGlobalContext } from './context'

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Auctions', link: '/auctions' },
    { name: 'Marketplace', link: '/marketplace' },
    { name: 'Drops', link: '/drops' },
  ]

  const sidebar =
    'fixed top-0 left-0 w-full h-full bg-white -translate-x-full pt-6 px-[30px]'

  const showSidebar = 'translate-x-0'

  return (
    <aside
      className={`${isSidebarOpen ? `${sidebar} ${showSidebar}` : sidebar}`}
    >
      <div className='flex items-center justify-between mb-[50px]'>
        <img src='../images/artsy.png' alt='Logo Artsy' />
        <button onClick={closeSidebar}>
          <CloseMenu />
        </button>
      </div>
      <ul className='flex flex-col gap-[18px] mb-[150px] md:mb-[100px]'>
        {navLinks.map((links) => {
          return (
            <li
              key={links.name}
              className='font-satoshi font-medium text-24 text-content-color leading-52'
            >
              <Link href={links.link}>{links.name}</Link>
            </li>
          )
        })}
      </ul>
      <div className='flex flex-row justify-end'>
        <button className=''>
          <MessageIcon />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
