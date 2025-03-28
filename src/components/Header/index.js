import React from 'react'
import Logo from '@/components/Header/Logo'
import Link from 'next/link'
import { SunIcon } from '../Icons'
const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="flex items-center gap-4 capitalize px-3 py-8 font-medium">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button className="cursor-pointer">
          <SunIcon />
        </button>
      </nav>
    </header>
  );
}

export default Header