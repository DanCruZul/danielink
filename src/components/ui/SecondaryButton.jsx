import React from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const SecondaryButton = ({
  text,
  icon: Icon = ArrowDown,
  onClick,
  to,
  variant = "bordered",
  className = "",
}) => {
  const baseClasses =
    "w-fit px-5 py-4 text-base -tracking-wide rounded-full font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300";

  const variantClasses = {
    bordered: "border border-[var(--Border)] hover:bg-[var(--Border)]",
    filled: "bg-white text-black hover:bg-[var(--Text)]",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <Icon className="size-5" />
      <span>{text}</span>
    </>
  );

  const handleScroll = (event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (to) {
    if (to.startsWith("#")) {
      // Si 'to' comienza con '#', navega usando el desplazamiento suave
      return (
        <button className={buttonClasses} onClick={(e) => handleScroll(e, to)}>
          {content}
        </button>
      );
    } else {
      // Si 'to' es una ruta normal, usa Link de Next.js
      return (
        <Link href={to} className={buttonClasses}>
          {content}
        </Link>
      );
    }
  }

  // Si no hay 'to', renderiza un botón normal con onClick
  return (
    <button
      className={buttonClasses}
      onClick={onClick ? (e) => onClick(e) : undefined}
    >
      {content}
    </button>
  );
};

export default SecondaryButton;
