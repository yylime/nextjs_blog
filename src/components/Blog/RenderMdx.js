"use client"
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image
 from "next/image";
const mdxComponets = {
  Image
}
const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);
  return (
    <div className="font-in prose sm:prose-base md:prose-lg max-w-max prose-blockquote:bg-accent/20  prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-figure:relative prose-figcaption:mt-1 prose-figcaption:mb-2  prose-li:marker:text-accent  dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark  first-letter:text-3xl sm:first-letter:text-5xl">
      <MDXContent components={mdxComponets}/>
    </div>
  );
};

export default RenderMdx;
