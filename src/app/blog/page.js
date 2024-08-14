import Navbar from "@/components/Navbar";
import CTA from "@/components/Cta";
import Footer from "@/components/Footer";
import { getAllPostSlugs, getPostData } from "@/lib/posts";
import PostList from "@/components/ui/PostList"; // Importa el nuevo componente
import Image from "next/image";

export default async function Blog() {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostData(slug)));

  return (
    <div className="max-w-6xl px-5 lg:px-0 mx-auto min-h-screen">
      <Navbar />
      <section className="flex flex-col py-14 md:py-20 lg:py-24 gap-14">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl md:text-h2 font-medium flex items-center">
            Blog
          </h2>
          <div className="hidden md:flex items-center gap-3">
            <div className="size-12 bg-gray-600 rounded-full flex items-center justify-center">
              <Image
                className="rounded-full"
                src="/profile.png"
                alt="Daniel Cruz Photo"
                width={48}
                height={48}
              />
            </div>
            <div>
              <h2 className="text-base -tracking-wide font-bold">
                Daniel Cruz
              </h2>
              <p className="flex items-center gap-2">
                <span className="text-[var(--Accent)] text-xl">•</span>
                <span className="text-sm">Available for freelance work</span>
              </p>
            </div>
          </div>
        </div>
        <PostList posts={posts} />
      </section>
      <CTA
        images1={["/proyect2.jpg", "/proyecthero2.jpg"]}
        images2={[
          "/proyect1.webp",
          "/proyectservices1.webp",
          "/proyectteam2.jpg",
        ]}
        images3={["/proyect2.jpg", "/proyecthero2.jpg"]}
      />
      <Footer />
    </div>
  );
}
