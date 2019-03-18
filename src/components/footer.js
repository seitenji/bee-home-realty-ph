import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer>
    <div class="text-white">
      <div class="section">
        <div class="row mx-auto">
          <div class="col-sm">
            <Link to="/">
              <h1 class="display-4">Buy</h1>
            </Link>
          </div>
          <div class="col-sm">
            <Link to="/">
              <h1 class="display-4">Rent</h1>
            </Link>
          </div>
          <div class="col-sm text-center">
            <ul>
              <Link to="/">
                <li class="mb-2">Home</li>
              </Link>
              <Link to="/">
                <li class="mb-2">Buy</li>
              </Link>
              <Link to="/">
                <li class="mb-2">Rent</li>
              </Link>
              <Link to="/">
                <li class="mb-2">About</li>
              </Link>
              <Link to="/">
                <li class="mb-2">Contact</li>
              </Link>
            </ul>
          </div>
          <div class="col-sm">
            <p>Bee Home Realty, Inc.</p>
            <p>All Rights Reserve</p>
          </div>
          <div class="col-sm">
            <Link to="https://www.facebook.com/BeeHomeRealtyInc/">
              <img
                src="images/facebook.png"
                alt="facebook"
                class="mx-md-4 mr-2"
              />
            </Link>
            <Link to="/">
              <img src="images/instagram.png" alt="instagram" class="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
