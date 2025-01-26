import React from "react";
import { Blog } from "./Blog";

export function BlogList({ blogs, visibleBlogIndex }) {
  return (
    <div className="flex items-center gap-8 lg:gap-12 justify-center">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className={`${
            index === visibleBlogIndex ? "block" : "hidden"
          } md:block`}
        >
          <Blog geetamImg={blog.geetamImg} Name={blog.Name} Para={blog.Para} />
        </div>
      ))}
    </div>
  );
}
