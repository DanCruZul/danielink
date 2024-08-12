"use client";

import React, { useEffect, useRef } from "react";
import ProjectItem from "./ui/ProjectItem";

const RecentProjects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const projectsContainer = projectsRef.current;

    const handleScroll = () => {
      if (projectsContainer) {
        const children = Array.from(projectsContainer.children);
        children.forEach((child) => {
          const leftColumn = child.querySelector("[data-left-column]");
          const rightColumn = child.querySelector("[data-right-column]");
          if (leftColumn && rightColumn) {
            const scrollPosition = window.scrollY;
            const rightColumnHeight = rightColumn.offsetHeight;
            const leftColumnHeight = leftColumn.offsetHeight;
            const maxScroll = rightColumnHeight - leftColumnHeight;

            if (scrollPosition > maxScroll) {
              leftColumn.style.transform = `translateY(${maxScroll}px)`;
            } else {
              leftColumn.style.transform = `translateY(${scrollPosition}px)`;
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projectsRef]);

  const projects = [
    {
      year: "2024",
      title: "Evoke - Premium Agency/SaaS Website Template",
      description:
        "Evoke is a Template made for digital marketing agencies and SaaS businesses. It features multiple pages, and tons of unique sections to help build your new website. It's built to help you showcase your business's services or products, your past work, and gives your users an easy way to get in touch with you through the Calendly embed.",
      role: "Web Designer, SEO",
      deliverables: "Web Design, Branding",
      company: "Wize Templates",
      siteUrl: "https://evoketemplate.framer.website/",
      images: ["/proyect1.webp", "/proyectservices1.webp", "/proyectteam2.jpg"],
    },
    {
      year: "2024",
      title: "Evoke - Premium Agency/SaaS Website Template",
      description:
        "Evoke is a Template made for digital marketing agencies and SaaS businesses. It features multiple pages, and tons of unique sections to help build your new website. It's built to help you showcase your business's services or products, your past work, and gives your users an easy way to get in touch with you through the Calendly embed.",
      role: "Web Designer, SEO",
      deliverables: "Web Design, Branding",
      company: "Brandboost",
      siteUrl:
        "https://www.behance.net/gallery/197444853/Brandboost-Marketing-agency-Landing-page",
      images: ["/proyecthero2.jpg", "/proyect2.jpg"],
    },
    // Agrega más proyectos aquí
  ];

  return (
    <div id="projects" className="flex flex-col gap-16 py-24">
      <h2 className="text-h2 font-medium flex items-center">
        <span className="size-3 bg-[var(--Accent)] rounded-full mr-5"></span>
        Recent projects
      </h2>

      <div ref={projectsRef} className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
