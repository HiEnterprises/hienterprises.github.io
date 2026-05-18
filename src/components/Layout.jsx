import { Outlet } from "react-router-dom";
import { TopNav } from "./Navigation";
import "../assets/layout.css";

export default function Layout({ logoSrc, altText, navItems }) {
  return (
    <div className="app-container">
      <TopNav logoSrc={logoSrc} altText={altText} navItems={navItems} />
      <main className="main-content scroll-under-nav">
        <Outlet />
      </main>
    </div>
  );
}
