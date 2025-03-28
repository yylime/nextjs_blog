import { format } from "date-fns";
import Categories from "@/components/Blog/Categories";
import { allBlogs } from "contentlayer/generated";
import GithubSlug, { slug } from "github-slugger";
import Link from "next/link";
import Image from "next/image";
import { sortBlogs } from "@/utils";

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
    <article className="mt-2 flex flex-col text-dark">
      <div className="flex flex-col px-32">
        <h1 className="mt-6 font-bold text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={all_categories} currentSlug={params.slug} />
      <div className="w-full grid grid-cols-3 gap-16 mt-16">
        {sortBlogs(blogs).map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <div className="group w-full flex flex-col items-start gap-4 text-dark justify-start">
              <Link
                href={`${blog.url}`}
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
                <Link href={`/categories/${slug(blog.tags[0])}`}>
                  <span className="uppercase text-accent font-semibold text-sm">
                    {blog.tags[0]}
                  </span>
                </Link>
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
    </article>
  );
}
