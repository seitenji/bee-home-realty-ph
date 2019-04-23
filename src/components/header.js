import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"
import { Link } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Header = ({ siteTitle }) => (
  <header>
    <div className="mx-lg-5 mx-xl-6">
      <Navbar expand="md" className="py-2 mx-md-5 mx-lg-6">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item ml-4">
                <Link to="/" className="nav-link" activeClassName="active">
                  Home
                </Link>
              </li>
              <li className="nav-item ml-4">
                <Link to="/sale" className="nav-link" activeClassName="active">
                  Buy
                </Link>
              </li>
              <li className="nav-item ml-4">
                <Link to="/rent" className="nav-link" activeClassName="active">
                  Rent
                </Link>
              </li>
              <li className="nav-item ml-4">
                <Link to="/about" className="nav-link" activeClassName="active">
                  About
                </Link>
              </li>
              <li className="nav-item ml-4">
                <Link
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
