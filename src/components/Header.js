import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
function Header() {
  return (
    <>
    <div className='header-content'>
    <div className="header">
        <Link to="/" className="logo btn">
            Vestel
        </Link>
        <div className="form-container">
            <form action="">
                <input type="search" placeholder="Ürün, kategori, servis ara" id="search"/>
                <label htmlFor="search" >
                <BsSearch/>
                </label>
            </form>
        </div>
    </div>
</div>
    </>
  )
}

export default Header