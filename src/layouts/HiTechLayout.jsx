import React from 'react';
import { Outlet } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';
import GlassNavbar from '../components/GlassNavbar';

export default function HiTechLayout() {
  // Scopes the local hitech style.css stylesheet dynamically
  useStylesheet('/hitech/css/style.css');

  const links = [
    { to: '/hitech', label: 'Home', end: true },
    { to: '/hitech/phones', label: 'Phones' },
    { to: '/hitech/tablets', label: 'Tablets' },
    { to: '/hitech/consoles', label: 'Consoles' },
    { to: '/hitech/computers', label: 'Computers' },
    { to: '/hitech/televisions', label: 'TVs' },
    { to: '/', label: '← HiEnterprises™' }
  ];

  return (
    <div className="hitech-site-container">
      <GlassNavbar
        brandLogo="/assets/pics/hitech/longlogo.png"
        brandName="HiTech"
        brandLink="/hitech"
        links={links}
      />

      <Outlet />
    </div>
  );
}
