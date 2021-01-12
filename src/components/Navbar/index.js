import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        EVOLVE
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/Physical"
              className={
                window.location.pathname === "/physical" || window.location.pathname === "/Physical"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Physical
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Mental"
              className={window.location.pathname === "/mental" ? "nav-link active" : "nav-link"}
            >
              Mental
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Resources"
              className={window.location.pathname === "/resources" ? "nav-link active" : "nav-link"}
            >
              Resources
            </Link>
          </li>       
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
