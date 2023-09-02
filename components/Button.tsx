import React from "react";

interface ButtonProps {
  onClick?: () => void;
  leftIcon?: any;
  rightIcon?: any;
  sx?: string;
  children?: any;
  asLink?: any;
  href?: string;
}

const Button = ({
  onClick,
  leftIcon,
  rightIcon,
  children,
  sx,
  asLink,
  href,
}: ButtonProps) => {
  const Comp = asLink ? asLink : "button";

  return (
    <Comp
      onClick={!asLink && onClick}
      href={asLink && href}
      className={`primary_button ${sx}`}
    >
      {leftIcon && leftIcon()}
      <span className={leftIcon ? "pl-2" : rightIcon && "pr-2"}>
        {children}
      </span>
      {rightIcon && rightIcon()}
    </Comp>
  );
};

export default Button;
