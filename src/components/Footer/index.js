import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-[90vw] px-8">
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 border-t border-slate-200 py-4 md:flex-row md:justify-between">
          <small className="font-sans antialiased text-sm text-current text-center dark:text-white">
            Copyright &copy; {new Date().getFullYear()} yylime. All rights
            reserved.
          </small>
          <div className="flex gap-1 sm:justify-center ">
            <a
              href="https://github.com/yylime?tab=repositories"
              className="inline-grid place-items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none dark:text-white"
            >
              <svg
                width="1.5em"
                height="1.5em"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
                className="h-4 w-4"
              >
                <path
                  d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
