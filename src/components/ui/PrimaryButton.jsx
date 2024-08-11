import React from "react";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

const Button = ({ text, icon: Icon = CalendarDays, href = "/cta" }) => {
  return (
    <Link href={href} passHref>
      <button className="w-fit flex items-center gap-2 bg-white text-black text-base -tracking-wide px-5 py-4 rounded-full font-medium hover:bg-[var(--Text)] hover:gap-3 transition-all duration-300">
        <Icon className="size-5" />
        <span>{text}</span>
      </button>
    </Link>
  );
};

export default Button;
