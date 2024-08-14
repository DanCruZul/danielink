import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <div className="flex flex-col gap-10">
      {posts.map((post, index) => (
        <Link href={`/posts/${post.slug}`} key={index}>
          <div className="border-b border-[var(--Border)] flex flex-col gap-3 pb-6 hover:cursor-pointer blog-post-item">
            <span className="text-lg md:text-xs font-normal">
              {post.category}
            </span>
            <h3 className="text-h3s md:text-h3 font-medium">{post.title}</h3>
            <span className="text-lg md:text-xs text-[var(--Text)]">
              {post.date} • by {post.author}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
