"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./ui/PrimaryButton";
import Image from "next/image";

const About = () => {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // Asumiendo que 1024px es el breakpoint para desktop
    };

    checkIfDesktop();
    window.addEventListener("resize", checkIfDesktop);

    return () => window.removeEventListener("resize", checkIfDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      if (
        !sectionRef.current ||
        !leftColumnRef.current ||
        !rightColumnRef.current
      )
        return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const leftColumnRect = leftColumnRef.current.getBoundingClientRect();
      const rightColumnRect = rightColumnRef.current.getBoundingClientRect();

      if (sectionRect.top <= 0) {
        const maxTranslate =
          rightColumnRect.bottom - leftColumnRect.height - sectionRect.top;
        const translateY = Math.max(
          0,
          Math.min(-sectionRect.top, maxTranslate)
        );
        leftColumnRef.current.style.transform = `translateY(${translateY}px)`;
      } else {
        leftColumnRef.current.style.transform = "translateY(0)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamada inicial para establecer la posición correcta

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  return (
    <section
      id="about"
      className="about-section py-14 md:py-24 flex flex-col gap-11"
      ref={sectionRef}
    >
      <h2 className="text-h2s lg:text-h2 font-medium flex items-center">
        <span className="size-3 bg-[var(--Accent)] rounded-full mr-5"></span>
        About
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-9 md:gap-6 lg:gap-16">
        <div
          className="left-column flex flex-col lg:flex-row max-lg:gap-6"
          ref={leftColumnRef}
        >
          <Image
            src="/profile.png"
            alt="Daniel Cruz Photo"
            className="size-20 rounded-full mr-6"
            width={80}
            height={80}
          />
          <div className="flex flex-col gap-8">
            <h3 className="text-h3s lg:text-h3 font-medium">
              I&apos;m Daniel Cruz - a freelance web developer crafting Digital
              experiences from Medellin, Colombia
            </h3>
            <Button text="GET STARTED" />
          </div>
        </div>
        <div className="flex flex-col gap-6 text-p16" ref={rightColumnRef}>
          <p>
            Hey there! I&apos;m Daniel Cruz, a freelance web developer based in
            Medellin, Colombia. I specialize in crafting dynamic websites that
            leave a lasting impression. My skills span HTML, CSS, JavaScript,
            and more, allowing me to bring your digital vision to life with
            precision and creativity.
          </p>
          <p>
            From sleek landing pages to robust e-commerce platforms, I&apos;ve
            got you covered. I thrive on exceeding client expectations, whether
            it&apos;s building responsive designs or optimizing for SEO. I take
            the time to understand your goals, ensuring the end product meets
            your needs.
          </p>
          <p>
            Located in Medellin, Colombia, I draw inspiration from the
            city&apos;s diverse culture and innovative spirit. Let&apos;s
            collaborate and turn your ideas into captivating online experiences!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
