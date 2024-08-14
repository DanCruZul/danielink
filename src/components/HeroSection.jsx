"use client";
import { useState, useEffect } from "react";
import Button from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50); // Reducido a 50ms para iniciar más rápido
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col pt-8 lg:pt-24 gap-5 lg:gap-9 overflow-hidden"
    >
      <div
        className={`flex items-center gap-3 transition-all duration-700 ease-out ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-[50px] opacity-0"
        }`}
      >
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
          <h2 className="text-base -tracking-wide font-bold">Daniel Cruz</h2>
          <p className="flex items-center gap-2">
            <span className="text-[var(--Accent)] text-xl">•</span>
            <span className="text-sm">Available for freelance work</span>
          </p>
        </div>
      </div>

      <h1
        className={`text-h1s md:text-h1m lg:text-h1 font-medium transition-all duration-700 ease-out delay-200 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-[50px] opacity-0"
        }`}
      >
        Elevate your online presence with our customizable portfolio template
        tailored for freelancers.
      </h1>

      <p className="text-p20s lg:text-p20 mb-3 lg:mb-1 max-w-[48rem]">
        Present your skills, experience, and projects in a visually compelling
        way to captivate potential clients and stand out in your field.
      </p>

      <div className="flex gap-3">
        <Button text="GET STARTED" />
        <SecondaryButton text="Templates" to="#projects" />
      </div>

      <footer className="lg:mt-9 lg:py-10">
        {/* <div className="flex gap-20">
          <div className="text-[var(--Border)] text-4xl font-bold">
            logo ipsum
          </div>
          <div className="text-[var(--Border)] text-4xl font-bold">N</div>
          <div className="text-[var(--Border)] text-4xl font-bold">000</div>
          <div className="text-[var(--Border)] text-4xl font-bold">
            logo-ipsum
          </div>
          <div className="text-[var(--Border)] text-4xl font-bold">
            logoIpsum
          </div>
        </div> */}
      </footer>
    </section>
  );
}
