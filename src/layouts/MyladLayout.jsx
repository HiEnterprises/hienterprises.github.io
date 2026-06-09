import React from 'react';
import { Outlet } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';
import GlassNavbar from '../components/GlassNavbar';

export default function MyladLayout() {
  // Scopes the local mylad style.css stylesheet dynamically
  useStylesheet('/mylad/css/style.css');

  const links = [
    { to: '/mylad', label: 'HOME', end: true },
    { to: '/mylad/myphones', label: 'MyPhone Ranges' },
    { to: '/mylad/mylad-ranges', label: 'MyLad Ranges' },
    { to: '/mylad/mytv-ranges', label: 'MyTV Ranges' },
    { to: '/mylad/mytendo-ranges', label: 'MyTendo Ranges' },
    { to: '/mylad/about', label: 'ABOUT' },
    { to: '/', label: '← HiEnterprises' }
  ];

  return (
    <div className="mylad-site-container">
      <GlassNavbar
        brandLogo="/mylad/pics/logo.png"
        brandName="MyLad"
        brandLink="/mylad"
        links={links}
      />
      
      <Outlet />
    </div>
  );
}
