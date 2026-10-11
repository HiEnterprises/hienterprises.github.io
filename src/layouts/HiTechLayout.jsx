import React from 'react';
import { Outlet } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';
import GlassNavbar from '../components/GlassNavbar';

export default function HiTechLayout() {
  // Scopes the local hitech style.css stylesheet dynamically
  useStylesheet('/hitech/css/style.css');

  const links = [
    { to: '/hitech', label: 'Home', icon: 'home', end: true },
    { to: '/hitech/phones', label: 'Phones', icon: 'smartphone' },
    { to: '/hitech/tablets', label: 'Tablets', icon: 'tablet' },
    { to: '/hitech/consoles', label: 'Consoles', icon: 'sports_esports' },
    { to: '/hitech/computers', label: 'Computers', icon: 'computer' },
    { to: '/hitech/televisions', label: 'TVs', icon: 'tv' },
    { to: '/', label: 'HiEnterprises™', icon: 'arrow_back', isCta: true }
  ];

  return (
    <div className="hitech-site-container">
      <GlassNavbar
        brandLogo="/assets/pics/hitech/longlogo.png"
        brandName="HiTech"
        brandTagline="Smart tech · Less nonsense"
        brandLink="/hitech"
        links={links}
        menuTitle="Shop HiTech"
        menuSubtitle="Find your next piece of technology."
        variant="brand"
        theme="hitech"
      />

      <Outlet />
    </div>
  );
}
