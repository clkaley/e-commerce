import React from "react";
import { Link } from "react-router-dom";
import './style.css'
function Navbar() {
  return (
    <div>
      <h1 className="brand-title m-2">
        VESTEL
      </h1>
       <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" to="/">
           Vestel
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
                  Login
              
                </Link>
              </li>
              <li className="nav-item">
                <Link
                to='products'
                className="nav-link active" aria-current="page" href="#">
                  Register
              
                </Link>
              </li>
              <li className="nav-item">
                <Link
                to='products'
                className="nav-link active" aria-current="page" href="#">
                  Sepetim
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
