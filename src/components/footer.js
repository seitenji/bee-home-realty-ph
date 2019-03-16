// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    <div class="text-white">
      <div class="section">
        <div class="row mx-auto">
          <div class="col-sm">
            <a href="#">
              <h1 class="display-4">Buy</h1>
            </a>
          </div>
          <div class="col-sm">
            <a href="#">
              <h1 class="display-4">Rent</h1>
            </a>
          </div>
          <div class="col-sm text-center">
            <ul>
              <a href="#">
                <li class="mb-2">Home</li>
              </a>
              <a href="#">
                <li class="mb-2">Buy</li>
              </a>
              <a href="#">
                <li class="mb-2">Rent</li>
              </a>
              <a href="#">
                <li class="mb-2">About</li>
              </a>
              <a href="#">
                <li class="mb-2">Contact</li>
              </a>
            </ul>
          </div>
          <div class="col-sm">
            <p>Bee Home Realty, Inc.</p>
            <p>All Rights Reserve</p>
          </div>
          <div class="col-sm">
            <a href="https://www.facebook.com/BeeHomeRealtyInc/">
              <img
                src="images/facebook.png"
                alt="facebook"
                class="mx-md-4 mr-2"
              />
            </a>
            <a href="#">
              <img src="images/instagram.png" alt="instagram" class="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
