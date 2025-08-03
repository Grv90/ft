import React from "react";

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const BaseIcon: React.FC<IconProps & { children: React.ReactNode }> = ({
  size = 24,
  color = "currentColor",
  className = "",
  onClick,
  children,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      style={{ color }}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
