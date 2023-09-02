import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="main_container py-40 pattern-dots-xl text-[rgba(255,255,255,0.02)]">
      <div className={`flex flex-col text-white items-center text-center`}>
        <div className="z-[-1] bg-gradient-to-r from-cyan-500 h-[100px] w-[400px] md:h-[190px] md:w-[500px] blur-3xl opacity-20 rotate-45 absolute max-sm:hidden max-sm:left-[50%] left-[20%] max-sm:translate-x-[-50%] top-[40%]" />
        <div className="z-[-1] bg-gradient-to-r from-cyan-600 h-[100px] w-[200px] md:h-[90px] md:w-[400px] blur-3xl opacity-40 rotate-45 absolute right-[20%] top-[60%] md:top-[50%]" />
        <h2 className="text-6xl font-black">
          Your Home of movies,
          <br />
          anime, TV shows, and more..
        </h2>
        <p className="text-slate-300 text-xl pt-4">
          Watch from anywhere, and everytihng for free!
          <br />
          Ready for start?
        </p>
        <Button asLink={Link} href="#movies" rightIcon={FaArrowRight} sx="mt-4">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;
