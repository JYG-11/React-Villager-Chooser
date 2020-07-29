import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        VillagerChooser
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Villager list
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Add villager
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/edit/:id" className="nav-link">
              Edit villager
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/remove/:id" className="nav-link">
              Delete villager
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
