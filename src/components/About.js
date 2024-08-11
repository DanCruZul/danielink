import React from "react";
import Button from "./ui/PrimaryButton";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-24 flex flex-col gap-11">
      <h2 className="text-h2 font-medium flex items-center">
        <span className="size-3 bg-[var(--Accent)] rounded-full mr-5"></span>
        About
      </h2>

      <div className="grid grid-cols-2 gap-20">
        <div className="flex">
          <Image
            src="/profile.png"
            alt="Daniel Cruz Photo"
            className="size-20 rounded-full mr-6"
            width={80}
            height={80}
          />
          <div className="flex flex-col gap-8">
            <h3 className="text-h3 font-medium">
              I&apos;m Daniel Cruz - a freelance web developer crafting Digital
              experiences from Medellin, Colombia
            </h3>
            <Button text="GET STARTED" />
          </div>
        </div>

        <div className="flex flex-col gap-6 text-p16">
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
