import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex navbar">
      <ul className={`flex ${menu ? "d-block" : ""}`}>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">PLACES TO VISIT</a>
        </li>
        <li>
          <a href="#">EXPERIENCES</a>
        </li>
        <li>
          <a href="#">HERITAGE WALK</a>
        </li>
        <li>
          <a href="#">MAP</a>
        </li>
        <li>
          <a href="#">CONSERVATION</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
      <div
        className={`menu ${menu ? "close-btn" : ""}`}
        onClick={() => setMenu(!menu)}
      >
        <div className={`bar1 menu-bar`}></div>
        <div className={`bar2 menu-bar`}></div>
        <div className={`bar3 menu-bar`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
