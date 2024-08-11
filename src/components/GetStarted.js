"use client";
import React, { useEffect, useState } from "react";
import { Youtube, Linkedin, Instagram } from "lucide-react";
import Script from "next/script";
import { InlineWidget } from "react-calendly";

export default function GetStarted() {
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Calendly) {
      setIsCalendlyReady(true);
    }
  }, [setIsCalendlyReady]);

  return (
    <div className="flex flex-col justify-center text-center py-16 gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-h1 font-medium">Get Started</h2>
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
        <div className="mt-10">
          <InlineWidget
            url="https://calendly.com/danielcruzzuluaga"
            styles={{
              backgroundColor: "var(--Dark-Elevated)",
              borderRadius: "1rem",
              height: "42rem",
              width: "100%",
              maxWidth: "4xl",
              margin: "0 auto",
              paddingLeft: "4rem",
              paddingRight: "4rem",
            }}
          />
        </div>
      )}
    </div>
  );
}
