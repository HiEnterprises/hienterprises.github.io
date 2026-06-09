import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
import HiCafeLayout from './layouts/HiCafeLayout';
import HarmonyLayout from './layouts/HarmonyLayout';
import WorstEasternLayout from './layouts/WorstEasternLayout';
import HiOSMobileLayout from './layouts/HiOSMobileLayout';
import HiTechLayout from './layouts/HiTechLayout';
import MyladLayout from './layouts/MyladLayout';

// Ported Pages
import { Home, Blog, Brands } from './pages/Root/Pages';
import { HiCafeHome, HiCafeReviews, HiCafeContactUs, HiCafeChef, HiCafeMenu } from './pages/HiCafe/Pages';
import { HarmonyHome, HarmonyAndroid, HarmonyAutoUpdate, HarmonyHiMaterial, HarmonyMacOS, HarmonyWindows } from './pages/Harmony/Pages';
import { WorstEasternHome, WorstEasternRooms, WorstEasternHowToGetThere, WorstEasternHowToReserve, WorstEasternHiOSMobileApp } from './pages/WorstEastern/Pages';
import { HiOSMobileHome, HiOSMobileDownload, HiOSMobileLite, HiOSMobileHiMaterial, HiOSMobileChangelogArchive } from './pages/HiOSMobile/Pages';
import { 
  HiTechHome, HiTechPhones, HiTechTablets, HiTechConsoles, HiTechComputers, HiTechTelevisions,
  HiTechBuyX, HiTechPurchase, HiTechConfirmPurchase, HiTechThanksPurchase 
} from './pages/HiTech/Pages';
import { 
  MyladHome, MyladMyPhones, MyladRanges, MyladMyPhoneDetail, MyladMyPhoneEDetail, 
  MyladMyTvRanges, MyladMyTendoRanges, MyladAbout, 
  MyladBuyX, MyladPurchase, MyladConfirm, MyladThanks, MyladSnakeGame 
} from './pages/Mylad/Pages';
import { CafefiestaHome } from './pages/Cafefiesta/Pages';
import { HicardHome } from './pages/Hicard/Pages';
import { HypedHome } from './pages/Hyped/Pages';
import { NuggetdevHome } from './pages/Nuggetdev/Pages';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Root level (Main Site) */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="brands" element={<Brands />} />
          <Route path="cafefiesta" element={<CafefiestaHome />} />
          <Route path="hicard" element={<HicardHome />} />
          <Route path="hyped" element={<HypedHome />} />
        </Route>

        {/* HiCafe */}
        <Route path="/hicafe" element={<HiCafeLayout />}>
          <Route index element={<HiCafeHome />} />
          <Route path="reviews" element={<HiCafeReviews />} />
          <Route path="contact-us" element={<HiCafeContactUs />} />
          <Route path="chef" element={<HiCafeChef />} />
          <Route path="menu" element={<HiCafeMenu />} />
        </Route>

        {/* Harmony (Bootstrap Layout) */}
        <Route path="/harmony" element={<HarmonyLayout />}>
          <Route index element={<HarmonyHome />} />
          <Route path="android" element={<HarmonyAndroid />} />
          <Route path="himaterial" element={<HarmonyHiMaterial />} />
        </Route>

        {/* Harmony (Tailwind Pages without Bootstrap Layout wrapper) */}
        <Route path="/harmony/autoupdate" element={<HarmonyAutoUpdate />} />
        <Route path="/harmony/macos" element={<HarmonyMacOS />} />
        <Route path="/harmony/windows" element={<HarmonyWindows />} />

        {/* WorstEastern (weB&B) */}
        <Route path="/worsteastern" element={<WorstEasternLayout />}>
          <Route index element={<WorstEasternHome />} />
          <Route path="rooms" element={<WorstEasternRooms />} />
          <Route path="howtogetthere" element={<WorstEasternHowToGetThere />} />
          <Route path="how-to-reserve-room" element={<WorstEasternHowToReserve />} />
          <Route path="hios-mobile-app" element={<WorstEasternHiOSMobileApp />} />
        </Route>

        {/* HiOSMobile */}
        <Route path="/hiosmobile" element={<HiOSMobileLayout />}>
          <Route index element={<HiOSMobileHome />} />
          <Route path="download" element={<HiOSMobileDownload />} />
          <Route path="lite" element={<HiOSMobileLite />} />
          <Route path="himaterial" element={<HiOSMobileHiMaterial />} />
          <Route path="changelog-archive" element={<HiOSMobileChangelogArchive />} />
        </Route>

        {/* HiTech */}
        <Route path="/hitech" element={<HiTechLayout />}>
          <Route index element={<HiTechHome />} />
          <Route path="phones" element={<HiTechPhones />} />
          <Route path="tablets" element={<HiTechTablets />} />
          <Route path="consoles" element={<HiTechConsoles />} />
          <Route path="computers" element={<HiTechComputers />} />
          <Route path="televisions" element={<HiTechTelevisions />} />
          
          {/* Checkout Flows */}
          <Route path="buynow/buyx" element={<HiTechBuyX />} />
          <Route path="buynow/buyx.html" element={<HiTechBuyX />} />
          <Route path="buynow/purchase" element={<HiTechPurchase />} />
          <Route path="buynow/purchase.html" element={<HiTechPurchase />} />
          <Route path="buynow/confirmPurchase" element={<HiTechConfirmPurchase />} />
          <Route path="buynow/confirmPurchase.html" element={<HiTechConfirmPurchase />} />
          <Route path="buynow/thanksPurchase" element={<HiTechThanksPurchase />} />
          <Route path="buynow/thanksPurchase.html" element={<HiTechThanksPurchase />} />
        </Route>

        {/* MyLad */}
        <Route path="/mylad" element={<MyladLayout />}>
          <Route index element={<MyladHome />} />
          <Route path="myphones" element={<MyladMyPhones />} />
          <Route path="mylad-ranges" element={<MyladRanges />} />
          
          {/* Phone Details */}
          <Route path="myphone" element={<MyladMyPhoneDetail />} />
          <Route path="myphone.html" element={<MyladMyPhoneDetail />} />
          <Route path="myphone-detail" element={<MyladMyPhoneDetail />} />
          <Route path="myphone_e" element={<MyladMyPhoneEDetail />} />
          <Route path="myphone_e.html" element={<MyladMyPhoneEDetail />} />
          <Route path="myphone-e" element={<MyladMyPhoneEDetail />} />

          <Route path="mytv-ranges" element={<MyladMyTvRanges />} />
          <Route path="mytendo-ranges" element={<MyladMyTendoRanges />} />
          <Route path="about" element={<MyladAbout />} />
          
          {/* Checkout Flows */}
          <Route path="buynow" element={<MyladBuyX />} />
          <Route path="buyx" element={<MyladBuyX />} />
          <Route path="buyx.html" element={<MyladBuyX />} />
          <Route path="purchase" element={<MyladPurchase />} />
          <Route path="purchase.html" element={<MyladPurchase />} />
          <Route path="confirm" element={<MyladConfirm />} />
          <Route path="confirmPurchase.html" element={<MyladConfirm />} />
          <Route path="thanks" element={<MyladThanks />} />
          <Route path="thanksPurchase.html" element={<MyladThanks />} />

          {/* Snake Game */}
          <Route path="snakegame" element={<MyladSnakeGame />} />
          <Route path="snakegame.html" element={<MyladSnakeGame />} />
          <Route path="newsnakegame.html" element={<MyladSnakeGame />} />
        </Route>

        {/* nuggetdev (Tailwind Page, rendered directly) */}
        <Route path="/nuggetdev" element={<NuggetdevHome />} />
      </Routes>
    </Router>
  );
}

