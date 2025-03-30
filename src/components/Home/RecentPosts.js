import React from "react";
import { sortBlogs } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { slug } from "github-slugger";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2x; md:text-4xl dark:text-light">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg"
        >
          view all
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => (
          <BlogLayoutThree key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
