import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark">
      <Link href={blog.url} className="col-span-4 rounded-xl overflow-hidden">
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300"
        />
      </Link>
      <div className="col-span-8">
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
  );
};

export default BlogLayoutTwo;
