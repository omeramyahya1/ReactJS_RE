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
            <Link className="navbar-brand" to="/">
              Logo
            </Link>
          </div>
          <ul className="nav-links">
            <li className="theme-toggle" onClick={handleClick}>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </li>
            <li className="account">
              <Link to="/account_profile">
                <Button
                  className="btn account"
                  buttonColor="light"
                  buttonSize="btn--small"
                  buttonStyle="btn--primary"
                >
                  Account
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

function No_account() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link className="navbar-brand" to="/">
              Logo
            </Link>
          </div>
          <ul className="nav-links">
            <li className="theme-toggle">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export { NavBar, No_account };
