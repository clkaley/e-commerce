import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
           E-commerce 
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                to='products'
                className="nav-link active" aria-current="page" href="#">
                  Products
              
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                to='products'
                className="nav-link active" aria-current="page" href="#">
                  Login
              
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
