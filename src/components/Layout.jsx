import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="page-wrap">
      <header className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <img src="/Logo.png" alt="TS logo" className="logo-img" />
      </header>
      <div className="content-wrap">
      <main>
        <Outlet />
      </main>
      </div>
    </div>
  );
}
