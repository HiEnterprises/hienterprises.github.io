import React from 'react';
import { Outlet } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';
import GlassNavbar from '../components/GlassNavbar';

export default function HiCafeLayout() {
  // Scopes the hicafe.css stylesheet dynamically
  useStylesheet('/assets/css/hicafe.css');

  const links = [
    { to: '/hicafe', label: 'Home', icon: 'home', end: true },
    { to: '/hicafe/reviews', label: 'Reviews', icon: 'message' },
    { to: '/hicafe/contact-us', label: 'Contact Us', icon: 'call' },
    { to: '/hicafe/chef', label: 'Chef', icon: 'chef_hat' },
    { to: '/hicafe/menu', label: 'Menu', icon: 'book' },
    { to: '/harmony', label: 'Mobile App', icon: 'mobile' },
    { to: '/', label: 'Back to HiEnterprises™', icon: 'arrow_back' }
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
