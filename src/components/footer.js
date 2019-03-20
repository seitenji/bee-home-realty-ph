import { Link } from "gatsby"
import React from "react"

import imgFb from "../images/facebook.png"
import imgIg from "../images/instagram.png"

const Footer = () => (
  <footer>
    <div className="text-white">
      <div className="section">
        <div className="row mx-auto">
          <div className="col-sm">
            <Link to="/">
              <h1 className="display-4">Buy</h1>
            </Link>
          </div>
          <div className="col-sm">
            <Link to="/">
              <h1 className="display-4">Rent</h1>
            </Link>
          </div>
          <div className="col-sm text-center">
            <ul>
              <Link to="/">
                <li className="mb-2">Home</li>
              </Link>
              <Link to="/">
                <li className="mb-2">Buy</li>
              </Link>
              <Link to="/">
                <li className="mb-2">Rent</li>
              </Link>
              <Link to="/about">
                <li className="mb-2">About</li>
              </Link>
              <Link to="/contact">
                <li className="mb-2">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="col-sm">
            <p>Bee Home Realty, Inc.</p>
            <p>All Rights Reserve</p>
          </div>
          <div className="col-sm">
            <a href="https://www.facebook.com/BeeHomeRealtyInc/">
              <img src={imgFb} alt="facebook" className="mx-md-4 mr-2" />
            </a>
            <Link to="/">
              <img src={imgIg} alt="instagram" className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
