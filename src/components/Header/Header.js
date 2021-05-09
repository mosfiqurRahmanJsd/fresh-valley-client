import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="logo" src="https://i.ibb.co/1q3vz9x/Group-33072.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order-details">
                  Order
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sidebar">
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link" to="/deals"
                >
                  Deals
                </Link>
              </li>
              <li>
                <Link className="nav-link btn btn-success" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
