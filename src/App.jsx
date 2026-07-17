import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * ROUTING GUIDE
 *
 * This app uses Hash Routing (#/) for client-side navigation.
 * Each route section wraps pages in a Layout component that provides:
 * - Site-specific navbar branding
 * - Site-specific CSS styling
 * - Site-specific navigation links
 *
 * STRUCTURE:
 * Route path="/brand" → Layout component (e.g., HiCafeLayout)
 *                    → Nested routes for brand pages
 *
 * The Layout component handles styling via useStylesheet() hook,
 * which dynamically loads CSS for that brand.
 */

// ============ LAYOUT COMPONENTS ============
// Each layout wraps a brand's pages and applies site-specific styling
import RootLayout from './layouts/RootLayout';
import HiCafeLayout from './layouts/HiCafeLayout';
import WorstEasternLayout from './layouts/WorstEasternLayout';
import HiOSMobileLayout from './layouts/HiOSMobileLayout';
import HiTechLayout from './layouts/HiTechLayout';
import MyladLayout from './layouts/MyladLayout';

// ============ PAGE COMPONENTS ============
// Naming convention: [BrandName][PageName]
// All pages for a brand are exported from their Pages.jsx file
//
// To add a new page:
// 1. Create it in src/pages/[BrandName]/PageName.jsx
// 2. Export it from pages/[BrandName]/Pages.jsx
// 3. Import it here
// 4. Add a route in the appropriate section below
// 5. Add a nav link in the corresponding Layout file

// Root (Main HiEnterprises Site)
import { Home, Blog, Brands } from './pages/Root/Pages';

// HiCafe Restaurant
import { HiCafeHome, Barista, HiCafeReviews, HiCafeContactUs, HiCafeChef, HiCafeMenu } from './pages/HiCafe/Pages';

// Harmony Mobile App

// WorstEastern / weB&B Hotel
import { WorstEasternHome, WorstEasternRooms, WorstEasternHowToGetThere, WorstEasternHowToReserve, WorstEasternHiOSMobileApp } from './pages/WorstEastern/Pages';

// HiOSMobile App
import { HiOSMobileHome, HiOSMobileDownload, HiOSMobileLite, HiOSMobileHiMaterial, HiOSMobileChangelogArchive } from './pages/HiOSMobile/Pages';

// HiTech Electronics
import {
  HiTechHome, HiTechPhones, HiTechTablets, HiTechConsoles, HiTechComputers, HiTechTelevisions,
  HiTechBuyX, HiTechPurchase, HiTechConfirmPurchase, HiTechThanksPurchase
} from './pages/HiTech/Pages';

// MyLad Retro Tech
import {
  MyladHome, MyladMyPhones, MyladRanges, MyladMyPhoneDetail, MyladMyPhoneEDetail,
  MyladMyTvRanges, MyladMyTendoRanges, MyladAbout,
  MyladBuyX, MyladPurchase, MyladConfirm, MyladThanks, MyladSnakeGame
} from './pages/Mylad/Pages';

// Other Brands (landing pages only)
import { CafefiestaHome } from './pages/Cafefiesta/Pages';
import { HicardHome } from './pages/Hicard/Pages';
import { HypedHome } from './pages/Hyped/Pages';
import { NuggetdevHome } from './pages/Nuggetdev/Pages';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ========================================
            ROOT LEVEL - MAIN HIENTERPRISES SITE
            ======================================== */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="brands" element={<Brands />} />
          <Route path="cafefiesta" element={<CafefiestaHome />} />
          <Route path="hicard" element={<HicardHome />} />
          <Route path="hyped" element={<HypedHome />} />
        </Route>

        {/* ========================================
            HICAFE - Restaurant Brand
            Route: /#/hicafe
            CSS: /assets/css/hicafe.css (loaded automatically)
            To add a page: Add component in pages/HiCafe/, import here, add route
            ======================================== */}
        <Route path="/hicafe" element={<HiCafeLayout />}>
          <Route index element={<HiCafeHome />} />
          <Route path="barista" element={<Barista />} />
          <Route path="reviews" element={<HiCafeReviews />} />
          <Route path="contact-us" element={<HiCafeContactUs />} />
          <Route path="chef" element={<HiCafeChef />} />
          <Route path="menu" element={<HiCafeMenu />} />
        </Route>

        {/* ========================================
            WORSTEASTERN - weB&B Hotel
            Route: /#/worsteastern
            CSS: /assets/css/worsteastern.css
            ======================================== */}
        <Route path="/worsteastern" element={<WorstEasternLayout />}>
          <Route index element={<WorstEasternHome />} />
          <Route path="rooms" element={<WorstEasternRooms />} />
          <Route path="howtogetthere" element={<WorstEasternHowToGetThere />} />
          <Route path="how-to-reserve-room" element={<WorstEasternHowToReserve />} />
          <Route path="hios-mobile-app" element={<WorstEasternHiOSMobileApp />} />
        </Route>

        {/* ========================================
            HIOSMOBILE - Legacy Mobile App
            Route: /#/hiosmobile
            CSS: /assets/css/hiosmobile.css
            ======================================== */}
        <Route path="/hiosmobile" element={<HiOSMobileLayout />}>
          <Route index element={<HiOSMobileHome />} />
          <Route path="download" element={<HiOSMobileDownload />} />
          <Route path="lite" element={<HiOSMobileLite />} />
          <Route path="himaterial" element={<HiOSMobileHiMaterial />} />
          <Route path="changelog-archive" element={<HiOSMobileChangelogArchive />} />
        </Route>

        {/* ========================================
            HITECH - Electronics Retailer
            Route: /#/hitech
            CSS: /assets/css/hitech.css
            NOTE: Includes multi-step checkout flow
            ======================================== */}
        <Route path="/hitech" element={<HiTechLayout />}>
          <Route index element={<HiTechHome />} />
          <Route path="phones" element={<HiTechPhones />} />
          <Route path="tablets" element={<HiTechTablets />} />
          <Route path="consoles" element={<HiTechConsoles />} />
          <Route path="computers" element={<HiTechComputers />} />
          <Route path="televisions" element={<HiTechTelevisions />} />

          {/* Checkout Flow - supports both new and legacy URL patterns */}
          <Route path="buynow/buyx" element={<HiTechBuyX />} />
          <Route path="buynow/buyx.html" element={<HiTechBuyX />} />
          <Route path="buynow/purchase" element={<HiTechPurchase />} />
          <Route path="buynow/purchase.html" element={<HiTechPurchase />} />
          <Route path="buynow/confirmPurchase" element={<HiTechConfirmPurchase />} />
          <Route path="buynow/confirmPurchase.html" element={<HiTechConfirmPurchase />} />
          <Route path="buynow/thanksPurchase" element={<HiTechThanksPurchase />} />
          <Route path="buynow/thanksPurchase.html" element={<HiTechThanksPurchase />} />
        </Route>

        {/* ========================================
            MYLAD - Retro Tech Brand
            Route: /#/mylad
            CSS: /mylad/css/style.css
            NOTE: Includes interactive snake game and multi-step checkout
            ======================================== */}
        <Route path="/mylad" element={<MyladLayout />}>
          <Route index element={<MyladHome />} />
          <Route path="myphones" element={<MyladMyPhones />} />
          <Route path="mylad-ranges" element={<MyladRanges />} />

          {/* Product Detail Pages - supports multiple URL patterns for compatibility */}
          <Route path="myphone" element={<MyladMyPhoneDetail />} />
          <Route path="myphone.html" element={<MyladMyPhoneDetail />} />
          <Route path="myphone-detail" element={<MyladMyPhoneDetail />} />
          <Route path="myphone_e" element={<MyladMyPhoneEDetail />} />
          <Route path="myphone_e.html" element={<MyladMyPhoneEDetail />} />
          <Route path="myphone-e" element={<MyladMyPhoneEDetail />} />

          <Route path="mytv-ranges" element={<MyladMyTvRanges />} />
          <Route path="mytendo-ranges" element={<MyladMyTendoRanges />} />
          <Route path="about" element={<MyladAbout />} />

          {/* Checkout Flow */}
          <Route path="buynow" element={<MyladBuyX />} />
          <Route path="buyx" element={<MyladBuyX />} />
          <Route path="buyx.html" element={<MyladBuyX />} />
          <Route path="purchase" element={<MyladPurchase />} />
          <Route path="purchase.html" element={<MyladPurchase />} />
          <Route path="confirm" element={<MyladConfirm />} />
          <Route path="confirmPurchase.html" element={<MyladConfirm />} />
          <Route path="thanks" element={<MyladThanks />} />
          <Route path="thanksPurchase.html" element={<MyladThanks />} />

          {/* Interactive Game */}
          <Route path="snakegame" element={<MyladSnakeGame />} />
          <Route path="snakegame.html" element={<MyladSnakeGame />} />
          <Route path="newsnakegame.html" element={<MyladSnakeGame />} />
        </Route>

        {/* ========================================
            NUGGETDEV - Development Studio
            Route: /#/nuggetdev
            NOTE: Renders directly without layout wrapper (custom styling)
            ======================================== */}
        <Route path="/nuggetdev" element={<NuggetdevHome />} />
      </Routes>
    </Router>
  );
}
