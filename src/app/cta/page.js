import Navbar from "../../components/Navbar";
import CTA from "../../components/Cta";
import Footer from "../../components/Footer";

export default function GetStarted() {
  return (
    <div className="max-w-6xl mx-auto min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-24"></div>
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
