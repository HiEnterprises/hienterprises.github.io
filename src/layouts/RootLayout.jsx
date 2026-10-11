import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import GlassNavbar from "../components/GlassNavbar";

export default function RootLayout() {
  const { pathname } = useLocation();

  const enterpriseNav = {
    brandLogo: "/assets/logo.jpg",
    brandName: "HiEnterprises™",
    brandTagline: "One company · Many ideas",
    brandLink: "/",
    menuTitle: "HiEnterprises™",
    theme: "enterprise",
    links: [
      { to: "/", label: "Home", icon: "home", end: true },
      { to: "/brands", label: "Brands", icon: "apps" },
      { to: "/blog", label: "Blog", icon: "article" },
      { to: "/worsteastern", label: "weB&B", icon: "hotel" },
      { to: "/hicafe", label: "HiCafe™", icon: "restaurant" },
      { to: "/hiosmobile", label: "Get the app", icon: "smartphone", isCta: true },
    ],
  };

  const standaloneBrandNavs = [
    {
      path: "/cafefiesta",
      brandLogo: "/assets/pics/cafefiesta/logo.png",
      brandName: "CafeFiesta™",
      brandTagline: "Coffee · Done properly",
      brandLink: "/cafefiesta",
      menuTitle: "CafeFiesta™",
      menuSubtitle: "Coffee, food and the wider HiCafe family.",
      theme: "cafefiesta",
      links: [
        { to: "/cafefiesta", label: "Home", icon: "home", end: true },
        { to: "/hicafe/menu", label: "Menus", icon: "restaurant_menu" },
        { to: "/hicafe", label: "HiCafe", icon: "coffee" },
        { to: "/brands", label: "More brands", icon: "apps" },
        { to: "/", label: "HiEnterprises™", icon: "arrow_back", isCta: true },
      ],
    },
    {
      path: "/hicard",
      brandName: "HiCard",
      brandTagline: "Banking · Rewards",
      brandLink: "/hicard",
      menuTitle: "HiCard",
      menuSubtitle: "Smarter banking from the HiEnterprises family.",
      theme: "hicard",
      links: [
        { to: "/hicard", label: "Home", icon: "home", end: true },
        { to: "/hiosmobile", label: "Mobile app", icon: "smartphone" },
        { to: "/brands", label: "More brands", icon: "apps" },
        { to: "/", label: "HiEnterprises™", icon: "arrow_back", isCta: true },
      ],
    },
    {
      path: "/hyped",
      brandLogo: "/assets/pics/hyped/hyped-old.png",
      brandName: "HYPED",
      brandTagline: "Elevated energy",
      brandLink: "/hyped",
      menuTitle: "Get HYPED",
      menuSubtitle: "Energy, flavour and everything in between.",
      theme: "hyped",
      links: [
        { to: "/hyped", label: "Home", icon: "home", end: true },
        { to: "/hicafe", label: "HiCafe", icon: "coffee" },
        { to: "/hiosmobile", label: "Mobile app", icon: "smartphone" },
        { to: "/brands", label: "More brands", icon: "apps" },
        { to: "/", label: "HiEnterprises™", icon: "arrow_back", isCta: true },
      ],
    },
  ];

  const navConfig =
    standaloneBrandNavs.find(({ path }) => pathname.startsWith(path)) || enterpriseNav;

  return (
    <>
      <GlassNavbar
        {...navConfig}
        variant="brand"
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
