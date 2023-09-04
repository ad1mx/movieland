import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Status from "@/components/Status";
import { Roboto } from "next/font/google";
import { Metadata } from "next";
import OnlineStatusProvider from "@/context/OnlineStatusProvider";

const font = Roboto({
  weight: ["300", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "MovieLand - Your Home of movies",
  description: "MovlieLand is your home for all movies, anime, TV shows...",
  "og-title": "Test",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html style={{ scrollBehavior: "smooth" }} lang="en">
      <body className={`bg-gray-900 text-white ${font.className} font-normal`}>
        <OnlineStatusProvider>
          <Header />
          <Status />
          {children}
          <Footer />
        </OnlineStatusProvider>
      </body>
    </html>
  );
};

export default RootLayout;
