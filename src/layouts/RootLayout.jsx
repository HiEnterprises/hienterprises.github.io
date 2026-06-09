import React from 'react';
import { Outlet } from 'react-router-dom';
import GlassNavbar from '../components/GlassNavbar';

export default function RootLayout() {
  const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/blog', label: 'Blog' },
    { to: '/worsteastern', label: 'weB&B' },
    { to: '/hicafe', label: 'HiCafe™' },
    { to: '/brands', label: 'Brands' },
    { to: '/harmony', label: 'Mobile App', isCta: true },
  ];

  return (
    <>
      <GlassNavbar
        brandLogo="/assets/logo.jpg"
        brandName="HiEnterprises™"
        brandLink="/"
        links={links}
      />

      <Outlet />

      <footer className="text-center">
        <div className="container">
          <p>&copy; 2017-2025 The Highland Cafe™ Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
