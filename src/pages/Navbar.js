import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container -fluid">
          <Link className="navbar-brand" to="/">
            {" "}
            AGL
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                {" "}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/history">
                {" "}
                history
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/details">
                {" "}
                User Details
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;