"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsMenuOpen(false);
    };

    const links = document.querySelectorAll('a[href^="#"], a[href*="#"]');
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, [router, pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (path === "" || path === "/home") {
        if (pathname === "/home") {
          scrollToElement(hash);
        } else {
          router.push("/home");
          setTimeout(() => scrollToElement(hash), 100);
        }
      } else {
        navigateAndScroll(path, hash);
      }
    } else {
      router.push(href);
    }
  };

  const scrollToElement = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateAndScroll = (path, hash) => {
    if (path !== pathname) {
      router.push(path);
      setTimeout(() => {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      scrollToElement(hash);
    }
  };

  return (
    <header className="relative grid grid-cols-2 lg:grid-cols-3 items-center py-4">
      <div className="text-3xl -tracking-wider italic">
        <Link href="/home#hero">Danielink</Link>
      </div>
      <nav className="hidden lg:flex justify-center">
        <ul className="flex gap-10 text-base text-[var(--Text)] -tracking-wider duration-300">
          <li>
            <a
              href="/home"
              className="hover:text-white"
              onClick={(e) => handleNavClick(e, "/home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/home#projects"
              className="hover:text-white"
              onClick={(e) => handleNavClick(e, "/home#projects")}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="hover:text-white"
              onClick={(e) => handleNavClick(e, "/blog")}
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex lg:hidden justify-end">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>
      <div className="hidden lg:flex justify-end">
        <a href="/cta" onClick={(e) => handleNavClick(e, "/cta")}>
          <button className="bg-[var(--Dark-Elevated)] text-base -tracking-wide pr-2 pl-5 py-2 rounded-full flex items-center gap-3 hover:bg-white hover:text-[var(--Dark)] hover:gap-4 duration-300">
            LET&apos;S TALK
            <ArrowUpRight className="size-8 bg-[var(--Accent)] text-black px-2 py-1 rounded-full duration-300" />
          </button>
        </a>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden absolute rounded-2xl top-full left-0 right-0 bg-[var(--Dark-Elevated)] p-4 z-50">
          <nav>
            <ul className="flex flex-col gap-2 text-center text-base text-[var(--Text)] -tracking-wider">
              <li>
                <a
                  href="/home"
                  className="hover:text-white block py-2"
                  onClick={(e) => handleNavClick(e, "/home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/home#projects"
                  className="hover:text-white block py-2"
                  onClick={(e) => handleNavClick(e, "/home#projects")}
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-white block py-2"
                  onClick={(e) => handleNavClick(e, "/blog")}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/cta"
                  className="block py-2 w-fit mx-auto"
                  onClick={(e) => handleNavClick(e, "/cta")}
                >
                  <button className="bg-[var(--Dark-Elevated)] text-base -tracking-wide pr-2 pl-5 py-2 rounded-full flex items-center gap-3 hover:bg-white hover:text-[var(--Dark)] hover:gap-4 duration-300 w-full justify-between">
                    LET&apos;S TALK
                    <ArrowUpRight className="size-8 bg-[var(--Accent)] text-black px-2 py-1 rounded-full duration-300" />
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
