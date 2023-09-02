import React from "react";
import footerLinks from "@/constants/nav-links.json";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="main_container py-10 flex flex-col sm:flex-row max-sm:gap-16 max-sm:text-center justify-between border-t-[1px] border-slate-800">
      <div className="sm:max-w-lg flex flex-col max-sm:items-center">
        <Logo className="pb-2" />
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          saepe quos. Corporis assumenda placeat labore. Tenetur sed explicabo
          blanditiis itaque? Porro minima, tempora inventore beatae autem
          perspiciatis exercitationem fugit dolore.
        </p>
      </div>
      <div>
        <h2 className="pb-4">Links</h2>
        <ul className="space-y-4 text-slate-300">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
