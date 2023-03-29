import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../ContextAPI/Them.contextAPI";
export const Header = () => {
  const location = useLocation();
  const theme = useContext(Context);
  const navigate = useNavigate()

  const user = localStorage.getItem('user')

  const onclickLoginIn = () => {
    navigate('/login')
  }

  const onclickLoginOut = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <div className={theme}>
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
                <Link className="nav-link scrollto " to="/showteam">
                  ShowTeam
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
          {!user && <Button className="btn btn-primary buttonForHeader" onClick={onclickLoginIn}>
                  LogIn
                </Button> }
                {user && <Button className="btn btn-primary buttonForHeader" onClick={onclickLoginOut}>
                  LogOut
                </Button>
                }
          <Link to="/registration" className="get-started-btn scrollto">
            Registration
          </Link>
        </div>
      </header>
      {/* End Header */}
    </div>
  );
};
