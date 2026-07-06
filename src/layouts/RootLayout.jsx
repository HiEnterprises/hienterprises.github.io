import React from "react";
import { Outlet } from "react-router-dom";
import GlassNavbar from "../components/GlassNavbar";

export default function RootLayout() {
  const links = [
    { to: "/", label: "Home", icon: "home", end: true },
    { to: "/worsteastern", label: "weB&B", icon: "hotel" },
    { to: "/hicafe", label: "HiCafe™", icon: "restaurant" },
    { to: "/brands", label: "Brands", icon: "apps" },
    { to: "/hiosmobile", label: "App", icon: "mobile", isCta: true },
  ];

  return (
    <>
      <GlassNavbar
        brandLogo="/assets/logo.jpg"
        brandName="HiEnterprises™"
        brandLink="/"
        links={links}
      />

      <Outlet />

      <footer className="text-center">
        <div className="container">
          <p>
            Copyright &copy; The Highland Cafe™ Ltd. 2017-2026. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
