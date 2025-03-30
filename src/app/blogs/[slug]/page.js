import BlogDetails from "@/components/Blog/BlogDetails";
import RenderMdx from "@/components/Blog/RenderMdx";
import Tag from "@/components/Elements/Tag";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import { slug } from "github-slugger";
import { author, description } from "project files/siteMetaData";
import siteMetadata from "@/utils/siteMetaData";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({slug: blog._raw.flattenedPath}));;
}

// or Dynamic metadata
export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if(!blog){return;}
  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();
  let imagelist = [siteMetadata.socialBanner]
  if(blog.image && typeof blog.image.filePath === "string"){
    imagelist.push(blog.image.filePath.replace("../public", ""))
  }
  const ogImages = imagelist.map((img) => {
    return {
      url: img.includes("http") ? img : siteMetadata.siteUrl + img,
      alt: blog.title,
    };
  });
  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      images: ogImages,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      authors: authors.length > 0 ? authors : [siteMetadata.author]
    },
  };
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
          <h1 className="inline-block font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl leading-normal relative w-4/5">
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 right-0 left-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
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
      {/* blog details */}
      <BlogDetails blog={blog} slug_text={params.slug}></BlogDetails>
      {/* table of contents */}
      <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
        <div className="col-span-12 lg:col-span-4">
          <details
            className="border-[1px] border-solid border-dark dark:border-light dark:text-light  text-dark rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden  overflow-y-auto"
            open
          >
            <summary className="font-semibold text-lg capitalize cursor-pointer">
              Table of Contents
            </summary>
            <ul className="mt-4 font-in text-base">
              {blog.toc.map((headings) => {
                return (
                  <li key={headings.slug} className="py-2">
                    <a
                      href={`#${headings.slug}`}
                      data-level={headings.level}
                      className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
                    >
                      {headings.level === "three" ? (
                        <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                          &nbsp;
                        </span>
                      ) : null}
                      <span className="hover:underline ">{headings.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <RenderMdx blog={blog} />
        </div>
      </div>
    </article>
  );
}
