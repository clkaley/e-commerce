import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

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
                <input type="search" placeholder="Ne aramıştınız ?" id="search"/>
                <label htmlFor="search" ></label>
            </form>
        </div>
    </div>
</div>
    </>
  )
}

export default Header