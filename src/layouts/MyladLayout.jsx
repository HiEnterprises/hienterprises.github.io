import React from 'react';
import { Outlet } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';
import GlassNavbar from '../components/GlassNavbar';

export default function MyladLayout() {
  // Scopes the local mylad style.css stylesheet dynamically
  useStylesheet('/mylad/css/style.css');

  const links = [
    { to: '/mylad', label: 'Home', icon: 'home', end: true },
    { to: '/mylad/myphones', label: 'MyPhone', icon: 'smartphone' },
    { to: '/mylad/mylad-ranges', label: 'MyLad', icon: 'devices' },
    { to: '/mylad/mytv-ranges', label: 'MyTV', icon: 'tv' },
    { to: '/mylad/mytendo-ranges', label: 'MyTendo', icon: 'sports_esports' },
    { to: '/mylad/about', label: 'About', icon: 'info' },
    { to: '/', label: 'HiEnterprises', icon: 'arrow_back', isCta: true }
  ];

  return (
    <div className="mylad-site-container">
      <GlassNavbar
        brandLogo="/mylad/pics/logo.png"
        brandName="MyLad"
        brandTagline="Technology from another era"
        brandLink="/mylad"
        links={links}
        menuTitle="The MyLad range"
        variant="brand"
        theme="mylad"
      />
      
      <Outlet />
    </div>
  );
}
