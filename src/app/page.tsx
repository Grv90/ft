"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import "./page.scss";

export default function Home() {
  const handleMenuToggle = (isOpen: boolean) => {
    console.log("Menu toggled:", isOpen);
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  return (
    <div className="home-page">
      <Navbar
        onMenuToggle={handleMenuToggle}
        onProfileClick={handleProfileClick}
      />
      <div className="home-page__container">
        <main className="home-page__main">
          <div className="home-page__header">
            <h1 className="home-page__title">Welcome to Digitally</h1>
            <p className="home-page__description">
              Your modern web application with a beautiful navbar and custom
              button components.
            </p>
          </div>

          <div className="home-page__actions">
            <a className="home-page__button" href="/design-system">
              View Design System
            </a>
            <a className="home-page__button" href="/provider-list">
              Provider List Page
            </a>
          </div>
        </main>
        <footer className="home-page__footer"></footer>
      </div>
    </div>
  );
}
