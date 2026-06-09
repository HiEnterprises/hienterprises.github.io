import React from 'react';
import { Outlet } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';
import GlassNavbar from '../components/GlassNavbar';

export default function HiCafeLayout() {
  // Scopes the hicafe.css stylesheet dynamically
  useStylesheet('/assets/css/hicafe.css');

  const links = [
    { to: '/hicafe', label: 'Home', end: true },
    { to: '/hicafe/reviews', label: 'Reviews' },
    { to: '/hicafe/contact-us', label: 'Contact Us' },
    { to: '/hicafe/chef', label: 'Chef' },
    { to: '/hicafe/menu', label: 'Menu' },
    { to: '/harmony', label: 'Mobile App' },
    { to: '/', label: '← Back to HiEnterprises™' }
  ];

  return (
    <div className="hicafe-site-container">
      <GlassNavbar
        brandLogo="/assets/pics/hicafe/logo.png"
        brandName="The Highland Cafe™"
        brandLink="/hicafe"
        links={links}
      />

      <Outlet />

      <footer className="bg-primary-container py-5 mt-5">
        <div className="container text-center text-outline">
          <p>&copy; 2017-2025 The Highland Cafe™ Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
