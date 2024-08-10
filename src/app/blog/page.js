import Navbar from "@/components/Navbar";
import CTA from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto min-h-screen">
      <Navbar />
      <section className="flex flex-col py-24 gap-11">
        <div className="flex justify-between items-center">
          <h2 className="text-h2 font-medium flex items-center">
            Latest from my blog
          </h2>
          <div className="flex items-center gap-3">
            <div className="size-12 bg-gray-600 rounded-full flex items-center justify-center">
              <img className="rounded-full" src="/profile.png" alt="" />
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
