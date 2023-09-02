import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

const font = Roboto({
  weight: ["300", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MovieLand - Your Home of movies",
  description: "MovlieLand is your home for all movies, anime, TV shows...",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html style={{ scrollBehavior: "smooth" }} className="h-full" lang="en">
      <body
        className={`h-full bg-gray-900 text-white ${font.className} font-normal`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
