import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ProjectItem = ({
  year,
  title,
  description,
  role,
  deliverables,
  company,
  siteUrl,
  images,
}) => {
  return (
    <div className="grid grid-cols-2 gap-20">
      <div>
        <div className="sticky flex flex-col top-8 gap-9">
          <div className="w-fit bg-[var(--Dark-Elevated)] border border-[var(--Border)] text-white text-sm py-2 px-3 -tracking-wide rounded-full inline-block">
            {year}
          </div>

          <div className="flex flex-col gap-3 pb-11">
            <h3 className="text-h3 font-medium">{title}</h3>
            <p className="text-p16">{description}</p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex justify-between pb-5 border-b border-[var(--Border)]">
              <span className="text-[var(--Text)] text-base -tracking-wide">
                Role
              </span>
              <span className="text-base -tracking-wide">{role}</span>
            </div>
            <div className="flex justify-between pb-5 border-b border-[var(--Border)]">
              <span className="text-[var(--Text)] text-base -tracking-wide">
                Deliverables
              </span>
              <span className="text-base -tracking-wide">{deliverables}</span>
            </div>
            <div className="flex justify-between pb-5 border-b border-[var(--Border)]">
              <span className="text-[var(--Text)] text-base -tracking-wide">
                Company
              </span>
              <span className="text-base -tracking-wide">{company}</span>
            </div>
            <div className="flex justify-between pb-5 border-b border-[var(--Border)]">
              <span className="text-[var(--Text)] text-base -tracking-wide">
                Visit Site
              </span>
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[var(--Text)] transition-all duration-300"
              >
                <ArrowRight className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-9">
        <div className="w-fit bg-[var(--Dark-Elevated)] border border-[var(--Border)] text-white text-sm py-2 px-3 -tracking-wide rounded-full inline-block">
          {company}
        </div>
        <div className="flex flex-col gap-9">
          {images.map((image, index) => (
            <div key={index} className="rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-[25rem] object-cover transition duration-300 hover:brightness-90"
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
