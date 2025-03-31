import { blogs } from "velite/generated";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import FeaturedPost from "@/components/Home/FeaturedPost";
import RecentPosts from "@/components/Home/RecentPosts";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={blogs} />
      <FeaturedPost blogs={blogs} />
      <RecentPosts blogs={blogs} />
    </div>
  );
}
