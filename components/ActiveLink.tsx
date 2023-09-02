import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkProps {
  href: string;
  children: any;
  className?: string;
  activeStyle?: string;
}

const ActiveLink = ({
  href,
  className,
  children,
  activeStyle,
  ...props
}: ActiveLinkProps & LinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      {...props}
      className={`${className} ${isActive && activeStyle}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
