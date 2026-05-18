import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import Layout from "./components/Layout";

import { ThemeProvider } from "./components/ThemeContext";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
// You would import your other pages here, e.g.:
import HiCafeHome from "./pages/hicafe/Home";
//
// Images
import mainLogo from "./assets/logo.jpg";
import HiCafeLogo from "./assets/pics/brands/hicafe.png";

// Define the navigation structures for different sub-sites
const enterpriseNav = [
  { path: "/", icon: "home", label: "Home" },
  { path: "/blog", icon: "article", label: "Blog" },
  { path: "/webnb", icon: "hotel", label: "weB&B" },
  { path: "/hicafe", icon: "restaurant", label: "HiCafe" },
  { path: "/brands", icon: "category", label: "Brands" },
];

const hicafeNav = [
  { path: "/hicafe", icon: "home", label: "HiCafe" },
  { path: "/hicafe/menu", icon: "menu_book", label: "Menu" },
  { path: "/hicafe/locations", icon: "location_on", label: "Locations" },
];

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* MAIN ENTERPRISE SITE */}
          <Route
            element={
              <Layout
                logoSrc={mainLogo}
                altText="The Highland Cafe Enterprises"
                navItems={enterpriseNav}
              />
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            {/* Add other main enterprise routes here */}
          </Route>

          {/* HICAFE SUB-SITE */}
          <Route
            element={
              <Layout
                logoSrc={HiCafeLogo}
                altText="HiCafe"
                navItems={hicafeNav}
              />
            }
          >
            <Route path="/hicafe" element={<HiCafeHome />} />
            <Route path="/hicafe/menu" element={<div>Menu Page</div>} />
          </Route>

          {/* Redirect unknown URLs to the main home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
