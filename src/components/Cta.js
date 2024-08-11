"use client";
import React, { useEffect, useRef } from "react";
import Button from "./ui/PrimaryButton";
import Image from "next/image";

const PortfolioCTA = ({ images1 = [], images2 = [], images3 = [] }) => {
  const columnRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    columnRefs.forEach((ref, index) => {
      if (ref.current) {
        const direction = index === 1 ? 1 : -1;
        ref.current.style.setProperty("--scroll-direction", direction);
      }
    });
  }, [columnRefs]);

  const renderColumn = (images, index) => {
    return (
      <div className="h-full overflow-hidden" ref={columnRefs[index]}>
        <div
          className={`flex flex-col gap-4 animate-scroll-${
            index === 1 ? "down" : "up"
          }`}
        >
          {[...images, ...images, ...images].map((img, imgIndex) => (
            <Image
              key={imgIndex}
              src={img}
              alt={`Project ${(imgIndex % images.length) + 1}`}
              className="w-full h-64 object-cover rounded-lg"
              width={500}
              height={256}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative py-40 overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-3 gap-4 h-full opacity-20">
          {renderColumn(["/proyect2.jpg", "/proyecthero2.jpg"], 0)}
          {renderColumn(
            ["/proyect1.webp", "/proyectservices1.webp", "/proyectteam2.jpg"],
            1
          )}
          {renderColumn(["/proyect2.jpg", "/proyecthero2.jpg"], 2)}
        </div>
      </div>

      <div class="absolute top-[80%] left-0 right-0 bottom-0 bg-black opacity-95 blur-3xl"></div>
      <div class="absolute top-0 left-0 right-0 bottom-[90%] bg-black opacity-95 blur-3xl"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[var(--Dark)] via-black via-5% to-transparent to-50%"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 max-w-2xl">
        <h2 className="text-h2 font-medium">Have a Project in Mind?</h2>
        <p className="text-p16 mb-7">
          I&apos;d love to hear from you! Whether you&apos;re ready to kickstart
          a new website or revamp an existing one, I&apos;m here to help turn
          your ideas into reality.
        </p>
        <div>
          <Button text="GET STARTED" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCTA;
