import React from "react";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar fixed-top">
      <a className="navbar-brand text-light ms-3" href="#">
        Start BootStrap
      </a>
      <button
        className="navbar-toggler me-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav justify-content-end flex-grow-1 me-4">
          <a className="nav-item nav-link" href="#">
            Home
          </a>
          <a className="nav-item nav-link" href="#">
            About
          </a>
          <a className="nav-item nav-link" href="#">
            Services
          </a>
          <a className="nav-item nav-link" href="#">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
