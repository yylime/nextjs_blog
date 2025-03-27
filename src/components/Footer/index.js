import { GithubIcon } from "@/components/Icons";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 pb-4 rounded-2xl bg-dark m-10 flex flex-col text-light">
      <h3 className="mt-8 font-medium text-center text-xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <div className="items-center flex gap-4 justify-center">
        <p className="text-center mt-2">
          Copyright &copy; {new Date().getFullYear()} Yylime. All rights
          reserved.
        </p>
        <a href="https://github.com/yylime?tab=repositories" className="inline-block w-6 h-6 mr-4 fill-light" target="_blank">
          <GithubIcon className="hover:scale-105 transition-all duration-300 ease " />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
