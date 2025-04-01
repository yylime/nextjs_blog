"use client";

import React from "react";
import Logo from "@/components/Header/Logo";
import Link from "next/link";
import { MoonIcon, SunIcon } from "../Icons";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { cx } from "@/utils";
const Header = () => {
  const [mode, setMode] = useThemeSwitch();

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <nav className="w-max flex items-center gap-4 capitalize px-3 py-8 font-medium dark:text-light/90">
        <Link href="/" className="mr-2 cursor-pointer">
          home
        </Link>
        <Link href="/about" className="mx-2 cursor-pointer">
          about
        </Link>
        <Link href="/contact" className="mx-2 cursor-pointer">
          contact
        </Link>
        <button
          className={cx(
            "cursor-pointer w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-light"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
