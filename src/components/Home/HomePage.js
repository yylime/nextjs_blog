import Image from "next/image";
import React from "react";
import homeCharactor from "/public/profile-img.png";
import LatestPost from "@/components/Home/LatestPost";

const selfIntroduction = [
  "男",
  "190/65KG",
  "毕业于BUPT",
  "就职于CMG",
  "网络工程师",
  "Python爱好者",
  "Syslog",
  "Zabbix",
];

const bgColors = [
  "bg-[#606c38]",
  "bg-[#2a9d8f]",
  "bg-[#e9c46a]",
  "bg-[#e76f51]",
  "bg-[#f4a261]",
];
const HomePage = ({ blogs }) => {
  return (
    <div className="w-full grid grid-cols-12 px-10 md:px-24 lg:px-32 gap-4 items-center">
      <div className="col-span-12 md:col-span-4 flex flex-col pt-10 justify-center relative ">
        <div className="absolute top-10 left-0 right-4 bottom-0 md:border-r-2 border-slate-200 -z-10" />
        <div>
          <Image
            src={homeCharactor}
            alt="yylime_home"
            className="object-contain object-center rounded-3xl w-5/6 hover:scale-105 transition-all ease duration-200"
            priority
          />
          <ul className="flex flex-wrap mt-4 w-5/6 justify-start xs:justify-center md:justify-start">
            {selfIntroduction.map((item, index) => {
              const bgColor = bgColors[index % bgColors.length];

              return (
                <li
                  key={index}
                  className={`${bgColor} font-semibold inline-block capitalize text-sm py-2 px-3 text-white rounded-lg mr-3 mb-3 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center w-5/6 justify-start xs:justify-center md:justify-start">
            <span className="font-semibold inline-block py-2 px-3 text-white rounded-lg mr-8 mb-3 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal bg-[#dda15e] overflow-hidden text-xs md:text-sm">
              Email: yylimelime@gmail.com
            </span>
          </div>
        </div>

        <div className="justify-start inline-block text-justify text-lg text-gray-500 pr-8 xl:pr-12 2xl:pr-24 mt-8 text-dark dark:text-white">
          Success is not in what you have, but who you are. The true measure of
          a person’s life is not how much they achieve, but the impact they have
          on others.
        </div>
      </div>

      <div className="col-span-12 md:col-span-8">
        <LatestPost blogs={blogs} />
      </div>
    </div>
  );
};

export default HomePage;
