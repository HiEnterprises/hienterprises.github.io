import { Outlet } from "react-router-dom";
import { TopNav } from "./Navigation";
import "../assets/layout.css";

export default function Layout() {
  return (
    <div className="app-container">
      <TopNav />
      <main className="main-content scroll-under-nav">
        <Outlet />
      </main>
    </div>
  );
}
