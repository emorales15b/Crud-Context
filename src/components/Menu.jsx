import React from "react";

const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav_padding">
        <a className="navbar-brand nav_link" href="/">
          User Management
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
