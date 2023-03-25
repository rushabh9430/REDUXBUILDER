import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  return (
    <div>
      {/* ======= Header ======= */}
      <header
        id="header"
        className={`fixed-top ${
          location.pathname === "/" ? "" : "bg-dark"
        }`}
      >
        <div className="container d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0">
            <a href="index.html">
              Gp<span>.</span>
            </a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul class>
              <li>
                <Link className="nav-link scrollto" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto " to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/team">
                  Team
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/counter">
                  Counter
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
          <a href="#about" className="get-started-btn scrollto">
            Get Started
          </a>
        </div>
      </header>
      {/* End Header */}
    </div>
  );
};
