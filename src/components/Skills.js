/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Skills = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "Tailwind",
    "JavaScript",
    "React",
    "Nextjs",
    "Typescript",
    "Figma",
    "Responsive Design",
    "SEO",
    "Git",
  ];

  return (
    <section className="py-24 grid grid-cols-2 gap-16">
      <div className="flex flex-col gap-3">
        <h2 className="text-h2 font-medium flex items-center">
          <span className="size-3 bg-[var(--Accent)] rounded-full mr-5"></span>
          Skills
        </h2>
        <div>
          <p className="text-p16">
            Here, I showcase the programs I work with and the programming
            languages I master. From Figma to JavaScript, each skill contributes
            to the mosaic of my professional expertise.
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap justify-end gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-[var(--Dark-Elevated)] border border-[var(--Border)] text-white px-5 pt-3 pb-2 rounded-full text-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
/* eslint-enable react/no-unescaped-entities */
