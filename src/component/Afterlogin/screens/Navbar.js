import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
    // eslint-disable-next-line
  };

  useEffect(
    () => {
      showButton();
    },
    // eslint-disable-next-line
    []
  );

  window.addEventListener("resize", showButton);

  const p = {
    fontFamily: "Playfair Display",
    fontSize: "0.9rem",
    fontStyle: "normal",
    fontWeight: "700",
    color: "#19193E",
  };

  return (
    <>
      <nav className="nav_bar">
        <div className="logo_items">
          <Link to="/" className="logo-img">
            <img src="./images/logo.png"></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="link" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="link" onClick={closeMobileMenu}>
                PROFILE
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/schedule" className="link" onClick={closeMobileMenu}>
                SCHEDULE APPOINTMENTS
              </Link>
            </li>
          </ul>
        </div>
        <ul className="nav-menus">
          <li>
            <div className="profile_nav">
              <a style={p}>
                Hello!
                <br />
                Dmitry Galkin
                <br />
                <Link className="btn p-0 m-0 logoutbtn" to="/">
                  LOG OUT
                </Link>
              </a>
              <img src="./images/doc.jpg"></img>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
