import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./HiMaterial";
import "../assets/brandcard.css";

export function BrandCard({
  imageSrc,
  brandName,
  description,
  linkTo,
  buttonText = "Visit Site",
}) {
  return (
    <div className="brand-card">
      <div className="brand-image-container">
        <img src={imageSrc} alt={brandName} className="brand-card-img" />
      </div>
      <div className="brand-card-content">
        <div className="brand-card-text">
          <h4 className="brand-card-title">{brandName}</h4>
          <p className="brand-card-desc">{description}</p>
        </div>

        {/* Conditional Button: Only renders if a linkTo prop is provided */}
        {linkTo && (
          <div className="brand-card-action">
            <Link to={linkTo} className="brand-card-btn">
              {buttonText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================
// Footer
// ==========================
export function Footer() {
  return (
    <footer className="app-footer container mb-4">
      <Card className="text-center">
        <p className="footer-text">
          Copyright © 2017-2025 The Highland Cafe™ Ltd. All Rights Reserved.
        </p>
      </Card>
    </footer>
  );
}
