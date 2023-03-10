import Link from 'next/link'
import React from 'react'
import { useGlobalContext } from './context'
import { Cart, Notification, OpenMenu, SearchIcon } from './Icon'
import Sidebar from './Sidebar'
import { useRouter } from 'next/router'

function Navbar() {
  const { openSidebar } = useGlobalContext()
  const router = useRouter()

  const currentLink = router.pathname
  const activeLink =
    'text-menu-color font-satoshi font-medium text-[24px] underline leading-[32px]'
  const inActiveLink =
    'text-menu-color font-satoshi font-normal text-[24px] leading-[32px]'

  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Auctions', link: '/auctions' },
    { name: 'Marketplace', link: '/marketplace' },
    { name: 'Drops', link: '/drops' },
  ]

  return (
    <nav id='navbar' className='fixed w-full top-0 left-0 h-[100px] z-30'>
      <header className='flex justify-between items-center pt-8 px-[18px] md:px-12 lg:pt-[52] lg:pl-[183px] lg:pr-[130px]'>
        {openSidebar ? <Sidebar /> : null}
        <button className='sidebar-toggle lg:hidden' onClick={openSidebar}>
          <OpenMenu />
        </button>
        <div>
          <img src='../images/artsy.png' alt='artsy logo' />
        </div>
        <ul className='hidden lg:flex lg:gap-[47px]'>
          {navLinks.map((links) => {
            return (
              <li
                key={links.name}
                className={
                  currentLink === links.link ? activeLink : inActiveLink
                }
              >
                <Link href={links.link}>{links.name}</Link>
              </li>
            )
          })}
        </ul>
        <div className='flex items-center gap-4'>
          <div>
            <SearchIcon />
          </div>
          <div>
            <Cart />
          </div>
          <div className='hidden lg:flex'>
            <Notification />
          </div>
        </div>
      </header>
    </nav>
  )
}

export default Navbar
