import React from "react";
import { Outlet } from "react-router-dom";
import useStylesheet from "../hooks/useStylesheet";
import GlassNavbar from "../components/GlassNavbar";

export default function WorstEasternLayout() {
  // Scopes the worsteastern.css stylesheet dynamically
  useStylesheet("/assets/css/worsteastern.css");

  const links = [
    { to: "/worsteastern", label: "Home", icon: "home", end: true },
    { to: "/worsteastern/rooms", label: "Rooms", icon: "room" },
    {
      to: "/worsteastern/howtogetthere",
      label: "Staying with us",
      icon: "bed",
    },
    {
      to: "/worsteastern/how-to-reserve-room",
      label: "How to Reserve",
      icon: "calendar_month",
    },
    { to: "/", label: "Back to HiEnterprises", icon: "arrow_back" },
    {
      to: "/worsteastern/hios-mobile-app",
      label: "App",
      icon: "mobile",
      isCta: true,
    },
  ];

  return (
    <div className="worsteastern-site-container">
      <GlassNavbar
        brandLogo="/assets/pics/worsteastern/logo.png"
        brandName="weB&B"
        brandLink="/worsteastern"
        links={links}
      />

      <Outlet />

      <footer className="bg-primary-container py-5 mt-5">
        <div className="container text-center text-outline">
          <p>
            Copyright &copy; The Highland Cafe™ Ltd. 2021. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
