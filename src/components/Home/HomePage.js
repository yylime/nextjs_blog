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
  // "bg-indigo-500",
  // "bg-purple-500",
  // "bg-pink-500",
  // "bg-teal-500",
  // "bg-gray-500",
];
const HomePage = ({ blogs }) => {
  return (
    <div className="w-full grid grid-cols-12 px-10 md:px-24 lg:px-32 gap-4">
      <div className="col-span-12 md:col-span-4 flex flex-col pt-10 items-center justify-center relative ">
        <div className="absolute top-10 left-0 right-0 bottom-0 md:border-r-2 border-slate-200" />
        <Image
          src={homeCharactor}
          alt="yylime_home"
          className="object-contain object-center rounded-3xl w-5/6"
          priority
        />
        <ul className="flex flex-wrap mt-4 justify-center w-5/6 xs:justify-start">
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
      </div>
      <div className="col-span-12 md:col-span-8">
        <LatestPost blogs={blogs} />
      </div>
    </div>
  );
};

export default HomePage;
