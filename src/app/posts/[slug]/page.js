import { getPostData, getAllPostSlugs } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import CTA from "@/components/Cta";
import Footer from "@/components/Footer";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function Post({ params }) {
  const postData = getPostData(params.slug);

  return (
    <div className="max-w-6xl mx-auto min-h-screen">
      <Navbar />
      <section className="max-w-[45rem] mx-auto pt-20 pb-14 flex flex-col gap-5">
        <div className="flex gap-4 text-[var(--Text)] text-p16 items-center">
          <SecondaryButton
            className="text-white"
            to={`/blog`}
            text="All articles"
            icon={ArrowLeft}
          />
          <span className="text-[var(--Text)] text-p16">
            Lastest update: {postData.updated} • by {postData.author}
          </span>
        </div>
        <article
          className="flex flex-col gap-7 text-p20"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
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
