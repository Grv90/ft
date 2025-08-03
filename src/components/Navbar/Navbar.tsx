"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MenuIcon, UserIcon } from "../Icons";
import "./Navbar.scss";

export interface NavbarProps {
  className?: string;
  onMenuToggle?: (isOpen: boolean) => void;
  onProfileClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  className = "",
  onMenuToggle,
  onProfileClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    onMenuToggle?.(newMenuState);
  };

  const handleProfileClick = () => {
    onProfileClick?.();
  };

  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar__container">
        <div className="navbar__left">
          {/* Hamburger Menu */}
          <button
            className={`navbar__menu-btn ${
              isMenuOpen ? "navbar__menu-btn--active" : ""
            }`}
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <MenuIcon size={32} />
          </button>

          {/* Logo */}
          <div className="navbar__logo">
            <Image
              src="/logo.png"
              alt="digitally"
              width={160}
              height={48}
              className="navbar__logo-image"
            />
          </div>
        </div>

        {/* User Profile */}
        <button
          className="navbar__profile-btn"
          onClick={handleProfileClick}
          aria-label="User profile"
        >
          <UserIcon size={32} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
