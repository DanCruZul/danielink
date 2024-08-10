import React from "react";
import { TvMinimalPlay } from "lucide-react";
import Link from "next/link";

const Button = ({
  text,
  icon: Icon = TvMinimalPlay,
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

  if (to) {
    // Si se proporciona 'to', renderiza un Link de Next.js
    return (
      <Link href={to} className={buttonClasses}>
        {content}
      </Link>
    );
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

export default Button;
