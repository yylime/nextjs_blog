import React from "react";
import { sortBlogs } from "@/utils/index";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { zhCN } from 'date-fns/locale'
const LatestPost = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
        {sortedBlogs.slice(0, 6).map((blog, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-dark dark:text-white/80 h-full justify-start"
          >
            {/* 固定高度的 Image 容器 */}
            <Link
              href={blog.url}
              className="h-[100px] lg:h-[100px] xl:h-[200px] xxxl:h-[300px] w-full overflow-visible"
            >
              <Image
                src={blog.image.src}
                placeholder="blur"
                blurDataURL={blog.image.blurDataURL}
                alt={blog.title}
                width={blog.image.width}
                height={blog.image.height}
                className="w-full h-full object-cover object-left group-hover:scale-105 transition-all ease duration-300 shadow-lg shadow-gray dark:shadow-zinc-700 rounded-xl"
                sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
                priority
              />
            </Link>

            {/* 让文本部分填充剩余空间 */}
            <div className="flex flex-col w-full flex-grow mt-4">
              {/* 分类标签 */}
              <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
                {blog.tags[0]}
              </span>

              {/* 标题，限制最大高度，避免超出影响布局 */}
              <Link href={blog.url} className="inline-block my-1">
                <h2 className="font-semibold capitalize text-base sm:text-lg line-clamp-2 ">
                  <span
                    className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50
              dark:to-accentDark/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom 
              bg-no-repeat transition-[background-size] duration-500 dark:text-white/80"
                  >
                    {blog.title}
                  </span>
                </h2>
              </Link>

              {/* 日期始终在最下面 */}
              <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm sm:text-base mt-auto">
                {format(new Date(blog.publishedAt), "yyyy年MM月dd日", {
                  locale: zhCN,
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestPost;
