// utils/myFunction.js
import { blogs } from "velite/generated";
export default function BlogFilter({query}) {
    const results = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(query.toLowerCase())
      );
    return results;
}
  