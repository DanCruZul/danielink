import React from "react";
import SecondaryButton from "./ui/SecondaryButton";
import { Newspaper } from "lucide-react";

const LatestBlogPosts = () => {
  const blogPosts = [
    {
      category: "WEB DESIGN",
      title: "Starting and Growing a Career in Web Design",
      date: "Apr 8, 2022",
      author: "Daniel Cruz",
    },
    {
      category: "WEB DEVELOPMENT",
      title: "Create a Landing Page That Performs Great",
      date: "Mar 15, 2022",
      author: "Daniel Cruz",
    },
    {
      category: "WEB DESIGN",
      title: "How Can Designers Prepare for the Future?",
      date: "Feb 28, 2022",
      author: "Daniel Cruz",
    },
  ];

  return (
    <div className="flex flex-col py-24 gap-11">
      <h2 className="text-h2 font-medium flex items-center">
        <span className="size-3 bg-[var(--Accent)] rounded-full mr-5"></span>
        Latest from my blog
      </h2>

      <div className="flex flex-col gap-10">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="border-b border-[var(--Border)] flex flex-col gap-3 pb-6 hover:cursor-pointer blog-post-item"
          >
            <span className="text-xs font-normal">{post.category}</span>
            <h3 className="text-h3 font-medium">{post.title}</h3>
            <span className="text-xs text-[var(--Text)]">
              {post.date} • by {post.author}
            </span>
          </div>
        ))}
      </div>

      <SecondaryButton text="View All Articles" to="/blog" icon={Newspaper} />
    </div>
  );
};

export default LatestBlogPosts;
