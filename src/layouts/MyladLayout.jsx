import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';

export default function MyladLayout() {
  // Scopes the local mylad style.css stylesheet dynamically
  useStylesheet('/mylad/css/style.css');

  return (
    <div className="mylad-site-container" style={{ textAlign: 'center' }}>
      <center>
        <img src="/mylad/pics/logo.png" width="400" id="logo" alt="MyLad Logo" />
        <br />
        <button type="button"><Link to="/mylad">HOME</Link></button>
        <button type="button"><Link to="/mylad/myphones">MyPhone Ranges</Link></button>
        <button type="button"><Link to="/mylad/mylad-ranges">MyLad Ranges</Link></button>
        <button type="button"><Link to="/mylad/mytv-ranges">MyTV Ranges</Link></button>
        <button type="button"><Link to="/mylad/mytendo-ranges">MyTendo ranges</Link></button>
        <button type="button"><Link to="/mylad/about">ABOUT</Link></button>
        <button type="button"><Link to="/">&lt;-- HiEnterprises</Link></button>
      </center>
      
      <Outlet />
    </div>
  );
}
