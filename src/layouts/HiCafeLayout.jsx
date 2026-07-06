import React from "react";
import { Outlet, Link } from "react-router-dom";
import useStylesheet from "../hooks/useStylesheet";
import GlassNavbar from "../components/GlassNavbar";

export default function HiCafeLayout() {
  // Scopes the hicafe.css stylesheet dynamically
  useStylesheet("/assets/css/hicafe.css");

  const links = [
    { to: "/hicafe", label: "Home", icon: "home", end: true },
    { to: "/hicafe/reviews", label: "Reviews", icon: "message" },
    { to: "/hicafe/contact-us", label: "Contact Us", icon: "call" },
    { to: "/hicafe/chef", label: "Chef", icon: "chef_hat" },
    { to: "/hicafe/menu", label: "Menu", icon: "book" },
    { to: "/hiosmobile", label: "App", icon: "mobile", isCta: true },
  ];

  return (
    <div className="hicafe-site-container">
      <GlassNavbar
        brandLogo="/assets/pics/hicafe/logo.png"
        brandName="The Highland Cafe™"
        brandLink="/hicafe"
        links={links}
      />

      <Outlet />

      <footer className="bg-primary-container py-5 mt-5">
        <div className="container">
          <div
            className="translucentBox joinTop"
            style={{ backgroundColor: "var(--secondaryContainer)" }}
          >
            <p className="mb-0 text-center">
              <i>Visit our parent company's website</i>
            </p>
          </div>

          <div
            className="translucentBox joinBottom"
            style={{ backgroundColor: "var(--tertiaryContainer)" }}
          >
            <Link
              to="/"
              className="btn-card"
              style={{
                backgroundColor: "var(--tertiary)",
                color: "var(--onTertiary)",
              }}
            >
              The Highland Cafe™ Enterprises website
            </Link>
          </div>
          <div className="text-center mt-4">
            <p>
              Copyright &copy; The Highland Cafe™ Ltd. 2017-2025. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
