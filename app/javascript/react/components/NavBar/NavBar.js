import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="top-bar topbar-responsive">
        <div className="top-bar-title">
          <a className="topbar-responsive-logo" href="/">
            <strong>Random Website</strong>
          </a>
        </div>
        <div id="topbar-responsive" className="topbar-responsive-links">
          <div className="top-bar-right">
            <ul className="menu simple vertical medium-horizontal">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/users/sign_in">Sign in</Link>
              </li>
              <li>
                <Link to="/users/sign_up">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
