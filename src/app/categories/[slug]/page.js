import { format } from "date-fns";
import Categories from "@/components/Blog/Categories";
import { allBlogs } from "contentlayer/generated";
import GithubSlug, { slug } from "github-slugger";
import Link from "next/link";
import Image from "next/image";
import { sortBlogs } from "@/utils";
import BlogLayoutThree from "@/components/Blog/BlogLayoutThree";

const slugger = new GithubSlug();
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];
  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugTag = slug(tag);
        if (categories.indexOf(slugTag) === -1) {
          categories.push(slugTag);
          paths.push({ slug: slugTag });
        }
      });
    }
  });
  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${params.slug === "all" ? "web development" : params.slug} through our collection of blogs and tutorials.`,
  };
}


export default async function CategoryPage({ params }) {
  const all_categories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugTag = slug(tag);
      if (all_categories.indexOf(slugTag) === -1) {
        all_categories.push(slugTag);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugTag === params.slug;
    });
  });

  return (
    <article className="mt-2 flex flex-col text-dark dark:text-light">
      <div className="flex flex-col px-5 sm:px-10 md:px-24 sxl:px-32">
        <h1 className="mt-6 font-bold text-2xl md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={all_categories} currentSlug={params.slug} />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 pt-5 sm:pt-10 md:pt-24 sxl:pt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {sortBlogs(blogs).map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
}
