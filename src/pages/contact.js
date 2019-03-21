import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`Real Estate`, `Listing`, `Manila`]} />

    {/* Contact Section */}
    <div id="contact-section">
      <div className="section">
        <h1 className="title text-center">Contact</h1>

        <div className="card card-contact mx-auto">
          <div className="card-body">
            <h5 className="card-title text-center">Your concerns here</h5>
            <div className="card-text">
              <form>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Contact number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="validationTextarea">Message</label>
                  <textarea
                    className="form-control"
                    id="validationTextarea"
                    placeholder="Message"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-warning btn-block text-white"
                >
                  Contact now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Contact Info Section */}
    <div className="grid">
      <div id="contact-info-section" className="info">
        <div className="section" />
        <div className="card card-info mx-auto text-center pt-2">
          <div className="card-body">
            <p>info@beehomerealtyph.com</p>
            <p>
              Unit 314, Dakota Residences 555 Gen. Malvar St. <br />
              cor. M. Adriatico, Malate Manila
            </p>
            <p>(02) 938 7012</p>
            <button type="button" className="btn btn-link text-success pb-4">
              Meet the team
            </button>
            <hr />
            <h3 className="pt-3">Map</h3>
          </div>
        </div>
      </div>

      <div className="container-fluid map">
        <div id="googleMap" style={{ width: `100%`, height: `400px` }} />
      </div>
    </div>
  </Layout>
)
export default ContactPage
