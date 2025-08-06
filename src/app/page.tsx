"use client";
import React from "react";
import "./landing.scss";

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Left Column - Blue Background */}
      <div className="landing-page__left">
        <div className="landing-page__content">
          <div className="landing-page__brand">Quashed</div>
          <div className="landing-page__hero">
            <h1 className="landing-page__title">Frontend Developer Task!</h1>
            <p className="landing-page__description">
              This task is designed to assess your technical skills,
              problem-solving abilities, and attention to detail in a practical
              coding scenario.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - White Background */}
      <div className="landing-page__right">
        <div className="landing-page__content">
          <div className="landing-page__interactive">
            <div className="landing-page__button-group">
              <div className="landing-page__button-item">
                <h3 className="landing-page__button-title">Providers List</h3>
                <a href="/providers" className="landing-page__button"></a>
              </div>

              <div className="landing-page__button-item">
                <h3 className="landing-page__button-title">Design System</h3>
                <a
                  href="/tools/design-system"
                  className="landing-page__button"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
