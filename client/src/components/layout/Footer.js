import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <FooterContainer>
<div className="footer-top">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <ul className="nav justify-content-center" style={{width: "100%"}}>
          <li className="nav-item" style={{ marginRight: "5%" }}>
            <Link className="nav-link text-uppercase" to="/">
              Home&nbsp;<i className="fas fa-home"></i>
            </Link>
          </li>
          <li className="nav-item" style={{ marginRight: "5%" }}>
            <Link className="nav-link text-uppercase" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item" style={{ marginRight: "5%" }}>
            <Link className="nav-link text-uppercase" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item" style={{ marginRight: "5%" }}>
            <Link className="nav-link text-uppercase" to="/resume">
              Resume
            </Link>
          </li>
          <li className="nav-item" style={{ marginRight: "5%" }}>
            <Link className="nav-link text-uppercase" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>



  
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-social-icons py-4">
        	                <ul>
		                        <li><a href="https://www.github.com/jidelson"><i className="fa fa-github" aria-hidden="true"></i><p>Github</p></a></li>
		                        <li><a href="https://www.linkedin.com/in/joe-idelson/"><i className="fa fa-linkedin" aria-hidden="true"></i><p>LinkedIn</p></a></li>
				                {/* <li><a href="https://joeidelson.medium.com/"><i className="fa fa-medium" aria-hidden="true"></i>Medium</a></li> */}
			                </ul>
		                </div>
                    </div>
                </div>
                
            </div>
                    <div className="footer-bottom">
                        <p className="text-center mt-3 mb-0">
                            &copy;{new Date().getFullYear()} Joe Idelson - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}
export default Footer;

const FooterContainer = styled.footer`







.footer-top{
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
    text-align: center;
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
    color: turquoise;
}
ul li a{
    color: white;
    text-transform: uppercase;
}
ul li a:hover{
    color: turquoise;
    text-decoration: none;
}

.list-inline{
    display: flex;
    justify-content: space-between;
}

/* placement of whole buttons */
.footer-social-icons ul{
    margin: 0px;
    padding: 0px;
    display: flex;
    position: absolute;
    left: 49.5%;
    transform: translate(-50%);
    list-style-type: none;
}
/* gap inbetween buttons */
.footer-social-icons ul li{
    margin: 0 15px;
    /* list-style: none; */
}

/* style of buttons */
.footer-social-icons ul li a{
    position: relative;
    display: block;
    width: 70px;
    height: 70px;
    text-align: center;
    line-height: 70px;
    background: #fff;
    border-radius: 50%;
    font-size: 30px;
    color: #666;
    transition: -5s;
    
}
/* outer glow */
.footer-social-icons ul li a:before{
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #11999E;
    transition: .5s;
    transform: scale(.9);
    z-index: -1;
}
/* also outer glow */
.footer-social-icons ul li a:hover:before{
    transform: scale(1.1);
    box-shadow: 0 0 15px #11999E;
}
/* this controls glow for symbols inside button */
.footer-social-icons ul li a:hover{
    color: #11999E;
    box-shadow: 0 0 5px #11999E;
    text-shadow: 0 0 5px #11999E;
}
.footer-social-icons p{
    font-size: 0;
}

`;