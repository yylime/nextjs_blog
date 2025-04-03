import { blogs } from "velite/generated";
import HomePage from "@/components/Home/HomePage";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HomePage blogs={blogs} />
    </div>
  );
}
