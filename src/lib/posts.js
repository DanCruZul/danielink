import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.html$/, ""));
}

export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.html`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Extraer el título, la fecha, el autor, la categoría y la fecha de actualización del contenido HTML
  const titleMatch = fileContents.match(/<title>(.*?)<\/title>/);
  const dateMatch = fileContents.match(
    /<meta name="date" content="(.*?)"\s*\/>/
  );
  const updatedMatch = fileContents.match(
    /<meta name="updated" content="(.*?)"\s*\/>/
  );
  const authorMatch = fileContents.match(
    /<meta name="author" content="(.*?)"\s*\/>/
  );
  const categoryMatch = fileContents.match(
    /<meta name="category" content="(.*?)"\s*\/>/
  );
  const h1Match = fileContents.match(/<h1>(.*?)<\/h1>/);

  return {
    slug,
    title: h1Match ? h1Match[1] : titleMatch ? titleMatch[1] : slug,
    date: dateMatch ? dateMatch[1] : "Unknown date",
    updated: updatedMatch ? updatedMatch[1] : "Unknown update date",
    author: authorMatch ? authorMatch[1] : "Unknown author",
    category: categoryMatch ? categoryMatch[1] : "Uncategorized",
    contentHtml: fileContents,
  };
}
