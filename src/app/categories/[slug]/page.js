import Categories from "@/components/Blog/Categories";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";

export default async function CategoryPage({ params }) {
  const all_categories = ['all']
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugTag = slug(tag)
      if (all_categories.indexOf(slugTag) === -1) {
        all_categories.push(slugTag)
      }
      if (params.slug === "all"){
        return true
      }
      return slugTag === params.slug
    })
  })

  return <article className="mt-2 flex flex-col text-dark">
    <div className="flex flex-col px-32">
      <h1 className="mt-6 font-bold text-5xl" >
        #{params.slug}
      </h1>
      <span className="mt-2 inline-block">Discover more categories and expand your knowledge!</span>
    </div>
    <Categories categories={all_categories} currentSlug={params.slug}/>
  </article>;
}
