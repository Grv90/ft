import React from "react";
import "./Button.scss";

export interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | "subtle"
    | "primary"
    | "primary-flat"
    | "dark-primary"
    | "subtle-text"
    | "primary-text"
    | "dark-text";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  onClick,
  type = "button",
  className = "",
}) => {
  const baseClass = "btn";
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const stateClass = disabled ? "btn--disabled" : "";
  const loadingClass = loading ? "btn--loading" : "";
  const iconClass = icon ? `btn--icon btn--icon-${iconPosition}` : "";

  const buttonClasses = [
    baseClass,
    variantClass,
    sizeClass,
    stateClass,
    loadingClass,
    iconClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {loading && (
        <span className="btn__loader">
          <svg className="btn__loader-icon" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}

      {!loading && icon && iconPosition === "left" && (
        <span className="btn__icon btn__icon--left">{icon}</span>
      )}

      <span className="btn__content">{children}</span>

      {!loading && icon && iconPosition === "right" && (
        <span className="btn__icon btn__icon--right">{icon}</span>
      )}
    </button>
  );
};

export default Button;
