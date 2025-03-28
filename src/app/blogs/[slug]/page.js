import BlogDetails from "@/components/Blog/BlogDetails";
import RenderMdx from "@/components/Blog/RenderMdx";
import Tag from "@/components/Elements/Tag";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import { slug } from "github-slugger";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({slug: blog._raw.flattenedPath}));;
}

export default async function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            name={blog.tags[0]}
            link={`/categories/${slug(blog.tags[0])}`}
            className="px-6 text-sm py-2"
          />
          <h1 className="inline-block font-semibold capitalize text-light text-5xl leading-normal relative w-4/5">
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 right-0 left-0 bottom-0 h-full bg-dark/60" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </div>
      // blog details
      <BlogDetails blog={blog} slug={slug}></BlogDetails>
      // table of contents
      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4">
          <details
            className="border-[1px] border-solid border-dark text-dark rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden  overflow-y-auto"
            open
          >
            <summary className="font-semibold text-lg capitalize cursor-pointer">
              Table of Contents
            </summary>
            <ul className="mt-4 font-in text-base">
              {blog.toc.map((headings) => {
                return (
                  <li key={headings.slug} className="py-2">
                    <a href={`#${headings.slug}`} data-level={headings.level} className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-6 flex items-center justify-start">
                    {
                      headings.level === "three" ? (
                        <span className="flex w-1 h-1 rounded-full bg-dark mr-2">&nbsp;</span>
                      ): null
                    }
                      <span className="hover:underline ">{headings.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <div className="col-span-8">
          <RenderMdx blog={blog} />
        </div>
      </div>
    </article>
  );
}
