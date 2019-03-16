// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div class="mx-lg-5 mx-xl-6">
      <nav className="navbar navbar-expand-md navbar-light py-2 mx-md-5 mx-lg-6">
        <a className="navbar-brand" href="index.html">
          <img src="images/img_logo.png" alt="logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-4">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link" href="list.html">
                Buy
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link" href="property.html">
                Rent
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link active" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
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
