import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  leftIcon?: any;
  rightIcon?: any;
  sx?: string;
  children?: ReactNode;
  asLink?: any;
  href?: string;
  size?: "sm" | "md" | "lg";
  iconSpacing?: number;
  disabled?: boolean;
}

const Button = ({
  onClick,
  leftIcon,
  rightIcon,
  children,
  sx,
  asLink,
  href,
  iconSpacing = 8,
  disabled,
}: ButtonProps) => {
  if (asLink === true) asLink = Link;

  const Comp = asLink ? asLink : "button";

  return (
    <Comp
      onClick={!asLink && onClick}
      href={asLink && href}
      className={`${
        disabled && "cursor-not-allowed pointer-events-none opacity-50"
      } flex items-center px-4 py-2 rounded-full w-fit bg-cyan-600 hover:bg-cyan-700 font-bold ${sx}`}
      disabled={disabled}
    >
      {leftIcon && leftIcon()}
      <span
        className={`text-base`}
        style={{
          paddingRight: rightIcon ? iconSpacing : 0,
          paddingLeft: leftIcon ? iconSpacing : 0,
        }}
      >
        {children}
      </span>
      {rightIcon && rightIcon()}
    </Comp>
  );
};

export default Button;
