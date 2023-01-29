import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./NavBar.css";
import "./icons/sun.png";

function NavBar() {
  // const [click, setClick] = useState(false);
  let click = false;
  let theme = click ? "dark" : "light";
  let handleClick = (click) => {
    click = click ? click : !click;
    console.log(theme);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <ul className="logo-items">
              <li>
                <Link className="navbar-brand" to="/">
                  Logo
                </Link>
              </li>
            </ul>
          </div>
          <ul className="nav-links">
            <li className="theme-toggle" onClick={handleClick}>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </li>
            <li className="account">
              <Button
                className="btn"
                buttonColor="light"
                buttonSize="btn--small"
              >
                Account
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
