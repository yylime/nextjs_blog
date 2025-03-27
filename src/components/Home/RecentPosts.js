import React from "react";
import { sortBlogs } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="inline-block font-bold capitalize text-4xl">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent underline underline-offset-2 text-lg"
        >
          view all
        </Link>
      </div>
      <div className="w-full grid grid-cols-3 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <div className="group w-full flex flex-col items-start gap-4 text-dark justify-start">
              <Link
                href={`/blog/${blog.url}`}
                className="w-full h-auto overflow-hidden rounded-lg"
              >
                <Image
                  src={blog.image.filePath.replace("../public", "")}
                  placeholder="blur"
                  blurDataURL={blog.image.blurhashDataUrl}
                  alt={blog.title}
                  width={blog.image.width}
                  height={blog.image.height}
                  className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300"
                />
              </Link>
              <div className="flex flex-col">
                <span className="uppercase text-accent font-semibold text-sm">
                  {blog.tags[0]}
                </span>
                <Link href={blog.url} className="inline-block my-1">
                  <h2 className="font-semibold capitalize text-lg mt-4">
                    <span className="bg-gradient-to-t from-accent/50 to-accent bg-[length:0px_4px] group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-all duration-500">
                      {blog.title}
                    </span>
                  </h2>
                </Link>
                <span className="capitalize text-gray text-base font-semibold">
                  {format(new Date(blog.publishedAt), "yyyy MMMM dd")}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
