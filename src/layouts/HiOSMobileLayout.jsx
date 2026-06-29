import React from "react";
import { Outlet } from "react-router-dom";
import useStylesheet from "../hooks/useStylesheet";
import GlassNavbar from "../components/GlassNavbar";

export default function HiOSMobileLayout() {
  // Scopes the harmony.css stylesheet dynamically (reused for HiOSMobile layout)
  useStylesheet("/assets/css/harmony.css");

  const links = [
    { to: "/hiosmobile", label: "Home", icon: "home", end: true },
    { to: "/hiosmobile/download", label: "For Android", icon: "android" },
    { to: "/hiosmobile/lite", label: "For Web", icon: "web" },
    { to: "/hiosmobile/himaterial", label: "HiMaterial", icon: "architecture" },
    { to: "/", label: "Back to HiEnterprises™", icon: "arrow_back" },
  ];

  return (
    <div className="hiosmobile-site-container">
      <GlassNavbar
        brandLogo="/assets/pics/hiosmobile-site/hicafe2026-playstore.png"
        brandName="HiOSMobile"
        brandLink="/hiosmobile"
        links={links}
      />

      <Outlet />

      <footer className="py-5 mt-auto">
        <div className="container text-center">
          <p className="mb-0">
            Copyright © The Highland Cafe™ Ltd. 2021-2025. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
