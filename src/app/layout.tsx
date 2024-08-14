import type { Metadata } from "next";
import { dmSans } from "./fonts";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danielink | Portfolio",
  description: "Portfolio of Daniel Cruz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="script"
          href="https://assets.calendly.com/assets/external/widget.js"
        />
      </head>
      <body className={dmSans.className + " relative h-full w-full"}>
        {children}
      </body>
    </html>
  );
}
