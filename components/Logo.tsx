import Image from "next/image";
import React from "react";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className={`flex items-center ${className}`}>
      <Image
        src="/movieland.png"
        alt="Logo"
        width={35}
        height={35}
        className="scale-[.60]"
      />
      <h2 className="text-xl font-bold pl-1">MovieLand</h2>
    </Link>
  );
};

export default Logo;
