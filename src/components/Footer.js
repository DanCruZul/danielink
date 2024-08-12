"use client";
import React, { useEffect } from "react";
import { Youtube, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        scrollToElement(href.substring(1));
      } else if (href.includes("#")) {
        e.preventDefault();
        const [path, hash] = href.split("#");
        navigateAndScroll(path, hash);
      }
    };

    const scrollToElement = (elementId) => {
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const navigateAndScroll = (path, hash) => {
      if (path !== window.location.pathname) {
        router.push(path);
        const checkAndScroll = () => {
          const targetElement = document.getElementById(hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          } else {
            requestAnimationFrame(checkAndScroll);
          }
        };
        requestAnimationFrame(checkAndScroll);
      } else {
        scrollToElement(hash);
      }
    };

    const links = document.querySelectorAll('a[href^="#"], a[href*="#"]');
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, [router]);

  return (
    <footer>
      <div>
        <div className="grid grid-cols-2 py-16 border-y border-[var(--Border)]">
          <div>
            <h2 className="text-5xl font-medium">DANIELINK@GMAIL.COM</h2>
          </div>
          <div className="flex flex-wrap justify-evenly">
            <div className="flex flex-col gap-2 text-p16">
              <h3>Useful links</h3>
              <ul className="flex flex-col gap-2 text-[var(--Text)]">
                <li>
                  <Link href="/home#projects" className="hover:text-white">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/home#about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/cta" className="hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 text-p16">
              <h3>Contact</h3>
              <p>(+57) 350 489 1799</p>
            </div>
          </div>
        </div>

        <div className="py-9 border-b border-[var(--Border)] grid grid-cols-2 items-center">
          <div className="text-3xl -tracking-wider italic">
            <Link href="/home#hero">Danielink</Link>
          </div>
          {/* <div className="flex justify-center gap-10 text-[var(--Text)] text-p16">
            <a href="#" className="hover:text-white duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white duration-300">
              Terms & Conditions
            </a>
          </div> */}
          <div className="flex justify-end gap-2">
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

        <div className="py-6 text-p-16 flex justify-between">
          <p>© Notebook 2024. All Rights Reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://wize.bg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white italic font-bold hover:text-[var(--Text)] duration-300"
            >
              Wize
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
