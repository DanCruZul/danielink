import React from "react";
import { CalendarDays } from "lucide-react";

const Button = ({ text, icon: Icon = CalendarDays, onClick }) => {
  return (
    <button
      className="w-fit flex items-center gap-2 bg-white text-black text-base -tracking-wide px-5 py-4 rounded-full font-medium hover:bg-[var(--Text)] hover:gap-3 transition-all duration-300"
      onClick={onClick}
    >
      <Icon className="size-5" />
      <span>{text}</span>
    </button>
  );
};

export default Button;
