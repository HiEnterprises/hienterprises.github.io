import React from 'react';
import { Outlet } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';
import GlassNavbar from '../components/GlassNavbar';

export default function HarmonyLayout() {
  // Scopes the harmony.css stylesheet dynamically
  useStylesheet('/assets/css/harmony.css');

  const links = [
    { to: '/harmony', label: 'Home', end: true },
    { to: '/harmony/android', label: 'For Android' },
    { to: 'https://thehighlandcafe.github.io/harmony', label: 'For Web', isExternal: true },
    { to: '/harmony/himaterial', label: 'HarmonyUX' },
    { to: '/', label: '← HiEnterprises™' }
  ];

  return (
    <div className="harmony-site-container">
      <GlassNavbar
        brandLogo="https://thehighlandcafe.github.io/hioswebcore/assets/pics/logos/hiosbadge.png"
        brandName="Harmony"
        brandLink="/harmony"
        links={links}
      />

      <Outlet />

      <footer className="bg-surface-variant py-5 mt-auto">
        <div className="container text-center text-outline">
          <p className="mb-0">Copyright © The Highland Cafe™ Ltd. 2021-2025. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
