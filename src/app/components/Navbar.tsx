'use client'

import Link from 'next/link'
import React from 'react'
import HomeIcon from './ui/icons/HomeIcon'
import HomeFillIcon from './ui/icons/HomeFillIcon'
import SearchFillIcon from './ui/icons/SearchFillIcon'
import SearchIcon from './ui/icons/SearchIcon'
import NewIcon from './ui/icons/NewIcon'
import NewFillIcon from './ui/icons/NewFillIcon'

import { usePathname } from 'next/navigation';
import ColorButton from './ui/ColorButton'

import { useSession, signIn, signOut } from "next-auth/react"


const menu = [
  {
    href: '/', icon: <HomeIcon /> , clickedIcon: <HomeFillIcon />
  },
  {
    href: '/search', icon: <SearchIcon /> , clickedIcon: <SearchFillIcon />
  },
  {
    href: '/new', icon: <NewIcon /> , clickedIcon: <NewFillIcon />
  }
]

export default function Navbar() {

  const pathName = usePathname();
  const { data: session } = useSession();

  return (
    <div className='flex justify-between items-center px-6'>
      <Link href="/">
        <h1 className='text-3xl font-bold'>Instantgram</h1>
      </Link>
      <nav>
        <ul className='flex gap-4 items-center p-4'>
          { 
            menu.map((item) => 
              <li key={item.href}>
                <Link href={item.href}>
                  {pathName === item.href ? item.clickedIcon : item.icon}
                </Link>
              </li>
            )
          }
          {
            session ? <ColorButton text='Sign out' onClick={()=>signOut()} size='small' />
              : <ColorButton text='Sign in' onClick={()=>signIn()} size='small'/>
          }
        </ul>
      </nav>
    </div>
  )
}
