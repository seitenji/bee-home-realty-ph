// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import contactImg from "../images/contact-img.jpg"

const SubFooter = () => (
  <div>
    <div id="sub-contact-section">
      <div class="section">
        <h1 class="text-center display-4 mb-4">Do you have questions?</h1>

        <div class="row contact-card">
          <div class="col-sm">
            <img
              class="rounded-circle border border-info"
              src={contactImg}
              alt="contact"
            />
          </div>
          <div class="col-sm contact-info">
            <h4>Shiela Enojo</h4>
            <p class="font-weight-bold">Ask</p>
            <p>
              +02 938-7012 <br />
              info@beehomerealtyph.com
            </p>
            <button type="submit" class="btn btn-warning btn-block text-white">
              Contact now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SubFooter
