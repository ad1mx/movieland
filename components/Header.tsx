"use client";

import React, { useState } from "react";
import footerLinks from "@/constants/nav-links.json";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import ActiveLink from "./ActiveLink";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) =>
  isOpen && (
    <motion.nav
      className={`sm:hidden bg-gray-900 fixed top-0 right-0 w-[70%] border-l-[1px] border-slate-800 p-5 h-full transition-all ease-out z-10`}
      initial={{ right: "-100%" }}
      animate={{ right: 0 }}
    >
      <div className="flex justify-between">
        <Logo />
        <button
          className="sm:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <HiX />
        </button>
      </div>
      <div className="flex flex-col divide-y-[1px] divide-gray-800 pt-6">
        {footerLinks.map((link) => (
          <ActiveLink
            key={link.href}
            href={link.href}
            className="duration-150 py-4"
            activeStyle="text-cyan-400"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </ActiveLink>
        ))}
      </div>
    </motion.nav>
  );

const Header = () => {
  const pathname = usePathname();
  const isRoot = pathname === "/";
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <header
      id="header"
      className={`main_container py-4 border-b-[1px] transition-all ${
        isRoot ? "border-transparent" : "border-slate-800"
      } text-slate-50 flex justify-between items-center`}
    >
      <Logo />
      {/* Desktop nav */}
      <ul className="hidden space-x-6 sm:flex">
        {footerLinks.map((link) => (
          <li key={link.name}>
            <ActiveLink
              href={link.href}
              className="duration-150"
              activeStyle="text-cyan-400"
            >
              {link.name}
            </ActiveLink>
          </li>
        ))}
      </ul>
      {/* Mobile nav */}
      <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />
      <button
        className="sm:hidden text-2xl cursor-pointer"
        onClick={() => setIsSideBarOpen((prev) => !prev)}
      >
        <HiOutlineMenuAlt4 />
      </button>
    </header>
  );
};

export default Header;
