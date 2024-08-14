"use client";
import React, { useEffect, useState } from "react";
import { Youtube, Linkedin, Instagram } from "lucide-react";
import Script from "next/script";
import { InlineWidget } from "react-calendly";

export default function GetStarted() {
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);
  const [widgetHeight, setWidgetHeight] = useState("42rem");

  useEffect(() => {
    if (typeof window !== "undefined" && window.Calendly) {
      setIsCalendlyReady(true);
    }

    const updateWidgetHeight = () => {
      if (window.innerWidth < 640) {
        setWidgetHeight("30rem");
      } else if (window.innerWidth < 1024) {
        setWidgetHeight("36rem");
      } else {
        setWidgetHeight("42rem");
      }
    };

    updateWidgetHeight();
    window.addEventListener("resize", updateWidgetHeight);

    return () => window.removeEventListener("resize", updateWidgetHeight);
  }, []);

  return (
    <div className="flex flex-col justify-center text-center py-16 gap-8 md:gap-11 lg:gap-10">
      <div className="flex flex-col gap-5 md:gap-6 lg:gap-3">
        <h2 className="text-h1s md:text-h1m lg:text-h1 font-medium">
          Get Started
        </h2>
        <p className="text-p20">
          Find a suitable time slot in my calendar, and let&apos;s discuss your
          project.
        </p>
        <div className="flex justify-center gap-2">
          <a
            href="https://www.youtube.com/@danielink."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center size-9 rounded-full border border-[var(--Border)] group hover:bg-white duration-300"
          >
            <Youtube className="size-4 group-hover:fill-[var(--Dark)] duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-cruz-2700691a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center size-9 rounded-full border border-[var(--Border)] group hover:bg-white duration-300"
          >
            <Linkedin className="size-4 group-hover:fill-[var(--Dark)] duration-300" />
          </a>
          <a
            href="https://www.instagram.com/cruzzzulu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center size-9 rounded-full border border-[var(--Border)] group hover:bg-white duration-300"
          >
            <Instagram className="size-4 group-hover:fill-[var(--Dark)] duration-300" />
          </a>
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setIsCalendlyReady(true)}
      />
      {isCalendlyReady && (
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <InlineWidget
            url="https://calendly.com/danielcruzzuluaga"
            styles={{
              backgroundColor: "var(--Dark-Elevated)",
              borderRadius: "1rem",
              height: widgetHeight,
              width: "100%",
              maxWidth: "64rem", // 4xl in rem
              margin: "0 auto",
            }}
          />
        </div>
      )}
    </div>
  );
}
