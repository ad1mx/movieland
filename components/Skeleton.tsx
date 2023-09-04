import React, { HTMLAttributes } from "react";

interface SkeletonProps {
  variant?: "default" | "text";
  rounded?: string;
}

const Skeleton: React.FC<HTMLAttributes<HTMLDivElement> & SkeletonProps> = ({
  children,
  variant = "default",
  rounded = "md",
  className,
  ...props
}) => {
  let bg;

  switch (variant) {
    case "default":
      bg = "bg-[#151d30]";
      break;
    case "text":
      bg = "bg-[#1d2841]";
      break;
  }

  return (
    <div
      className={`animate-pulse ${bg} rounded-${rounded} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Skeleton;
