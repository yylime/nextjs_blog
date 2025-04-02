import React from "react";
import { sortBlogs } from "@/utils/index";
import Link from "next/link";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
const LatestPost = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  return (
    <section className="w-full pt-10 xs:px-1 sm:px-4 md:px-8 flex flex-col items-start justify-start">
      {/* <div className="w-full flex justify-between items-center text-white bg-[#dda15e] rounded-lg text-lg md:text-xl font-semibold ">
        <h3 className="w-fit ml-4 inline-block capitalize dark:text-light">
          最近的文章
        </h3>
        <Link
          href="/categories/all"
          className="mr-4 inline-block text-white dark:text-accentDark"
        >
          全部
        </Link>
      </div> */}

      <div className="grid grid-cols-1 grid-rows-2 gap-6 mt-10 sm:mt-16"></div>
    </section>
  );
};

export default LatestPost;
