import { allBlogs } from "contentlayer/generated"
import HomeCoverSection from "@/components/Home/HomeCoverSection"
import FeaturedPost from "@/components/Home/FeaturedPost";
import RecentPosts from "@/components/Home/RecentPosts";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPost blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </div>
  );
}
