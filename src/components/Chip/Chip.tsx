import React from "react";
import "./Chip.scss";

export interface ChipProps {
  children: React.ReactNode;
  variant?: "default" | "subtle" | "outlined" | "filled-blue" | "filled-orange";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({
  children,
  variant = "default",
  size = "md",
  disabled = false,
  onClick,
  className = "",
}) => {
  const baseClass = "chip";
  const variantClass = `chip--${variant}`;
  const sizeClass = `chip--${size}`;
  const stateClass = disabled ? "chip--disabled" : "";
  const clickableClass = onClick ? "chip--clickable" : "";

  const buttonClasses = [
    baseClass,
    variantClass,
    sizeClass,
    stateClass,
    clickableClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <div className={buttonClasses} onClick={handleClick}>
      <span className="chip__content">{children}</span>
    </div>
  );
};

export default Chip;
