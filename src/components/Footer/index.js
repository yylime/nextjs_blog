import { GithubIcon } from "@/components/Icons";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 pb-4 rounded-2xl bg-dark m-2 sm:m-10 flex flex-col text-light dark:text-dark dark:bg-accentDark">
      <h3 className="mt-8 font-medium dark:font-bold text-center text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <div className="items-center flex gap-4 flex-col md:flex-row justify-center">
        <p className="text-center mt-2 dark:font-bold">
          Copyright &copy; {new Date().getFullYear()} Yylime. All rights
          reserved.
        </p>
        <a href="https://github.com/yylime?tab=repositories" className="inline-block w-6 h-6 mr-4 fill-light dark:fill-black" target="_blank">
          <GithubIcon className="hover:scale-105 transition-all duration-300 ease " />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
