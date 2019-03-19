// import { Link } from "gatsby"
import React from "react"
import contactImg from "../images/contact-img.jpg"

const SubFooter = () => (
  <div>
    <div id="sub-contact-section">
      <div className="section">
        <h1 className="text-center display-4 mb-4">Do you have questions?</h1>

        <div className="row contact-card">
          <div className="col-sm">
            <img
              className="rounded-circle border border-info"
              src={contactImg}
              alt="contact"
            />
          </div>
          <div className="col-sm contact-info">
            <h4>Shiela Enojo</h4>
            <p className="font-weight-bold">Ask</p>
            <p>
              +02 938-7012 <br />
              info@beehomerealtyph.com
            </p>
            <button
              type="submit"
              className="btn btn-warning btn-block text-white"
            >
              Contact now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SubFooter
