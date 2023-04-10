import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Navbar() {
  return (
    <NavContainer>
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" style={{ width: "45px", marginLeft: "40%"}} />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span>
            <i className="fas fa-bars" style={{color: '#fff'}}></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto justify-content-between" style={{ width: "30%" }}>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/">
                Home&nbsp;<i className="fa fa-home"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </NavContainer>  
  )
}

export default Navbar;

const NavContainer = styled.div`

.nav-link{
  color: white;
}

.nav-link:hover{
  color: turquoise;
}
`;