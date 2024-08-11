import Navbar from "../../components/Navbar";
import GetStarted from "../../components/GetStarted";
import CTA from "../../components/Cta";
import Footer from "../../components/Footer";

export default function Cta() {
  return (
    <div className="max-w-6xl mx-auto min-h-screen">
      <Navbar />
      <GetStarted />
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
