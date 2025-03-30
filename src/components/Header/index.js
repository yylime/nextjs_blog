"use client"

import React from 'react'
import Logo from '@/components/Header/Logo'
import Link from 'next/link'
import { SunIcon } from '../Icons'
import { useThemeSwitch } from '../Hooks/useThemeSwitch'
const Header = () => {

  const [mode, setMode] = useThemeSwitch();
  
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <nav className="w-max flex items-center gap-4 capitalize px-3 py-8 font-medium dark:text-light/90">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          className="cursor-pointer"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          <SunIcon />
        </button>
      </nav>
    </header>
  );
}

export default Header;