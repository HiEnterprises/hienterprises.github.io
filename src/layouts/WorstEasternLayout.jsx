import React from 'react';
import { Outlet } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';
import GlassNavbar from '../components/GlassNavbar';

export default function WorstEasternLayout() {
  // Scopes the worsteastern.css stylesheet dynamically
  useStylesheet('/assets/css/worsteastern.css');

  const links = [
    { to: '/worsteastern', label: 'Home', end: true },
    { to: '/worsteastern/rooms', label: 'Rooms' },
    { to: '/worsteastern/howtogetthere', label: 'Staying with us' },
    { to: '/worsteastern/how-to-reserve-room', label: 'How to Reserve' },
    { to: '/worsteastern/hios-mobile-app', label: 'weB&B App' },
    { to: '/', label: 'Back to HiEnterprises' }
  ];

  return (
    <div className="worsteastern-site-container">
      <GlassNavbar
        brandLogo="/assets/pics/worsteastern/logo.png"
        brandName="weB&B"
        brandLink="/worsteastern"
        links={links}
      />

      <Outlet />

      <footer className="bg-primary-container py-5 mt-5">
        <div className="container text-center text-outline">
          <p>&copy; 2021 The Highland Cafe™ Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
