"use client";

import Button from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col pt-24 gap-9">
      <div className="flex items-center gap-3">
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

      <h1 className="text-h1 font-medium">
        Elevate your online presence with our customizable portfolio template
        tailored for freelancers.
      </h1>

      <p className="text-p20 mb-1 max-w-[48rem]">
        Present your skills, experience, and projects in a visually compelling
        way to captivate potential clients and stand out in your field.
      </p>

      <div className="flex gap-3">
        <Button text="GET STARTED" />
        <SecondaryButton text="Templates" to="#projects" />
      </div>

      <footer className="mt-9 py-10">
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
