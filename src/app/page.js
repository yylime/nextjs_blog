import { allBlogs } from "contentlayer/generated"
import HomeCoverSection from "@/components/Home/HomeCoverSection"
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
    </div>
  );
}
