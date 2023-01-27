import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";

const Root = () => {
  const [nav, setNav] = useState(true);

  return (
    <>
      <header>
        <div>
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <nav>
          <ul className={`${!nav ? "active " : "none"}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/contact"> Contact </Link>
            </li>
            <li>
              <Link to="/blog"> blogs </Link>
            </li>
            <li>
              <Link to="/careers"> Careers </Link>
            </li>
          </ul>
        </nav>
        <div>
          <button className="btn">Request invite</button>
        </div>
        {nav ? (
          <div className="burger" onClick={() => setNav(!nav)}>
            <img src="/images/icon-hamburger.svg" alt="Menu button" />
          </div>
        ) : (
          <div className="burger" onClick={() => setNav(!nav)}>
            <img src="/images/icon-close.svg" alt="Menu button" />
          </div>
        )}
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
