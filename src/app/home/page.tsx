import Navbar from "../../components/Navbar";
import Hero from "../../components/HeroSection";
import RecentProjects from "../../components/RecentProjects";
import About from "../../components/About";
import Skills from "../../components/Skills";
import LatestBlogPosts from "../../components/Blog";
import Footer from "../../components/Footer";
import CTA from "../../components/Cta";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto min-h-screen">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_8%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <Navbar />
      <Hero />
      <RecentProjects />
      <About />
      <Skills />
      <LatestBlogPosts /> {/* Renderiza el componente aquí */}
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
    </main>
  );
}
