import { getAllPostSlugs, getPostData } from "@/lib/posts";

export async function GET() {
  console.log("API route /api/posts called");
  try {
    console.log("Getting all post slugs");
    const slugs = getAllPostSlugs();
    console.log("Slugs:", slugs);

    console.log("Getting post data for each slug");
    const posts = await Promise.all(slugs.map((slug) => getPostData(slug)));
    console.log("Posts:", posts);

    return new Response(JSON.stringify(posts), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in GET /api/posts:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
