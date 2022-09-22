import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import './style.css'
import { FaShoppingBasket,FaHouseUser,FaLongArrowAltRight } from "react-icons/fa";
function Navbar() {
  return (
    <div>
      <Header/>
      <nav className="navbar navbar-dark navbar-expand-lg bg-light  ">
  <div className="container-fluid mx-auto  ">
  {/* <Link className="navbar-brand" to="/">
   Vestel
  </Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
        <Link
        to='sign-in'
        className="nav-link active" aria-current="page" href="#">
          <FaHouseUser style={{fontSize:"22px"}}/>
        </Link>
        </li>
        <li className="nav-item">
        <Link
        to='sign-up'
        className="nav-link active" aria-current="page" href="#">
          <FaLongArrowAltRight style={{fontSize:"22px"}}/>
      
        </Link>
        </li>
        <li className="nav-item">
        <Link
        to='/'
        className="nav-link active" aria-current="page" href="#">
          <FaShoppingBasket style={{fontSize:"22px"}} />
        </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;


//  <nav classNameName="navbar navbar-expand-lg ">
// <div className="container">
//   <Link className="navbar-brand" to="/">
//    Vestel
//   </Link>
//   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// <span className="navbar-toggler-icon"></span>
// </button>
//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav me-auto mb-2 mb-lg-0">

//       <li className="nav-item">
//         <Link
//         to='sign-in'
//         className="nav-link active" aria-current="page" href="#">
//           Login
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//         to='sign-up'
//         className="nav-link active" aria-current="page" href="#">
//           Register
      
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//         to='products'
//         className="nav-link active" aria-current="page" href="#">
//           Sepet
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//         to='products'
//         className="nav-link active" aria-current="page" href="#">
//           Login
      
//         </Link>
//       </li> 
//     </ul>
//   </div>
// </div>
// </nav> 