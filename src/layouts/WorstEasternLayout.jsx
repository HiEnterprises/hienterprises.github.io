import React from "react";
import { Outlet, Link } from "react-router-dom";
import useStylesheet from "../hooks/useStylesheet";
import GlassNavbar from "../components/GlassNavbar";

export default function WorstEasternLayout() {
  // Scopes the worsteastern.css stylesheet dynamically
  useStylesheet("/assets/css/worsteastern.css");

  const links = [
    { to: "/worsteastern", label: "Home", icon: "home", end: true },
    { to: "/worsteastern/rooms", label: "Rooms", icon: "hotel" },
    {
      to: "/worsteastern/howtogetthere",
      label: "Staying with us",
      icon: "bed",
    },
    {
      to: "/worsteastern/how-to-reserve-room",
      label: "Reserve",
      icon: "calendar_month",
    },
    {
      to: "/worsteastern/hios-mobile-app",
      label: "Get the app",
      icon: "smartphone",
      isCta: true,
    },
  ];

  return (
    <div className="worsteastern-site-container">
      <GlassNavbar
        brandLogo="/assets/pics/worsteastern/logo.png"
        brandName="weB&B"
        brandTagline="Hotels · Done differently"
        brandLink="/worsteastern"
        links={links}
        menuTitle="Explore weB&B"
        variant="brand"
        theme="worsteastern"
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
          <p className="text-center mt-4">
            Copyright &copy; The Highland Cafe™ Ltd. 2021. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
