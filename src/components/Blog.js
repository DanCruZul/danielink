"use client";

import React, { useEffect, useState } from "react";
import SecondaryButton from "./ui/SecondaryButton";
import { Newspaper } from "lucide-react";
import PostList from "./ui/PostList"; // Importa el nuevo componente

const LatestBlogPosts = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        setLatestPosts(posts.slice(0, 3));
      } catch (e) {
        console.error("Error fetching posts:", e);
        setError("Failed to load posts. Please try again later.");
      }
    }
    fetchPosts();
  }, [setLatestPosts, setError]);

  if (error) {
    return <div>Error: {error.replace(/'/g, "&apos;")}</div>;
  }

  return (
    <div className="flex flex-col py-24 gap-11">
      <h2 className="text-h2 font-medium flex items-center">
        <span className="size-3 bg-[var(--Accent)] rounded-full mr-5"></span>
        Latest from my blog
      </h2>
      <PostList posts={latestPosts} /> {/* Usa el nuevo componente aquí */}
      <SecondaryButton text="View All Articles" to="/blog" icon={Newspaper} />
    </div>
  );
};

export default LatestBlogPosts;
