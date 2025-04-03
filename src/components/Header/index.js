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
    <header className="w-full px-5 sm:px-10 flex items-center justify-between sticky top-0 z-50 bg-light dark:bg-dark bg-opacity-95 dark:bg-opacity-95 border-b border-slate-200">
      <Logo />
      <nav className="w-max flex items-center gap-4 capitalize px-3 py-8 font-medium dark:text-white">
        <Link href="/" className="mr-2 cursor-pointer">
          主页
        </Link>
        <Link href="/categories/all" className="mx-2 cursor-pointer">
          全部文章
        </Link>
        {/* <Link href="/contact" className="mx-2 cursor-pointer">
          联系
        </Link> */}
        <button
          className={cx(
            "cursor-pointer w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-white" : "bg-white text-dark"
          )}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-white"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
