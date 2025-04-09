"use client";

import { blogs } from "velite/generated";
import React, { useState, useRef, useEffect } from "react";
import Logo from "@/components/Header/Logo";
import Link from "next/link";
import { MoonIcon, SunIcon } from "../Icons";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { cx } from "@/utils";

// 高亮匹配内容的函数
const highlightMatch = (text, query) => {
  if (!query) return text; // 如果没有输入内容，直接返回原始文本
  const regex = new RegExp(`(${query})`, "gi"); // 创建正则表达式，忽略大小写
  const parts = text.split(regex); // 根据正则表达式分割文本
  return parts.map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="text-accent font-semibold dark:text-accentDark">
        {part}
      </span>
    ) : (
      part
    )
  );
};
const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [searchQuery, setSearchQuery] = useState(""); // 搜索框输入值
  const [searchResults, setSearchResults] = useState([]); // 搜索结果
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // 下拉框是否可见
  const searchRef = useRef(null);

  // 搜索逻辑
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
    } else {
      const results = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  };
  // 点击页面其他地方时隐藏下拉框
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsDropdownVisible(false); // 隐藏下拉框
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full px-5 sm:px-10 flex items-center justify-between sticky top-0 z-50 bg-light dark:bg-dark bg-opacity-95 dark:bg-opacity-95 border-b border-slate-200">
      <Logo />
      {/* 搜索框 */}
      <div className="relative" ref={searchRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={(e) => {
            setIsDropdownVisible(true);
            handleSearch(e.target.value);
          }}
          placeholder="Search..."
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow bg-white"
        />
        {/* 搜索结果 */}
        {isDropdownVisible && searchResults.length > 0 && (
          <ul className="absolute top-full left-0 w-full min-w-[400px] bg-white dark:bg-dark border rounded-md mt-1 shadow-lg z-10">
            {searchResults.map((result) => (
              <li
                key={result.slug}
                className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700 dark:focus:bg-slate-700 dark:active:bg-slate-700"
              >
                <Link
                  href={result.url}
                  className="block"
                  onClick={() => setSearchResults([])}
                >
                  {highlightMatch(result.title, searchQuery)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <nav className="hidden w-max sm:flex items-center gap-4 capitalize px-3 py-6 font-medium dark:text-white">
        <Link href="/" className="mr-2 cursor-pointer">
          主页
        </Link>
        <Link href="/categories/all" className="mx-2 cursor-pointer">
          全部文章
        </Link>

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
