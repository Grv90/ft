import React from "react";
import "./Card.scss";

export interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "compact" | "small" | "large";
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  className = "",
  onClick,
}) => {
  const cardClasses = [
    "card",
    variant !== "default" ? `card--${variant}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
