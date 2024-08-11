"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
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
    <header className="grid grid-cols-3 items-center py-4">
      <div className="text-3xl -tracking-wider italic">
        <Link href="/home#hero">Danielink</Link>
      </div>
      <nav className="flex justify-center">
        <ul className="flex gap-10 text-base text-[var(--Text)] -tracking-wider duration-300">
          <li>
            <Link href="/home" className="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/home#proyects" className="hover:text-white">
              Work
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-end">
        <Link href="/cta">
          <button className="bg-[var(--Dark-Elevated)] text-base -tracking-wide pr-2 pl-5 py-2 rounded-full flex items-center gap-3 hover:bg-white hover:text-[var(--Dark)] hover:gap-4 duration-300">
            LET&apos;S TALK
            <ArrowUpRight className="size-8 bg-[var(--Accent)] text-black px-2 py-1 rounded-full duration-300" />
          </button>
        </Link>
      </div>
    </header>
  );
}
