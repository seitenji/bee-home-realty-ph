import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import logo from "../images/img-logo.png"

const PropertyPage = () => (
  <Layout>
    <SEO title="Property" keywords={[`gatsby`, `application`, `react`]} />
    {/* Display Section */}
    <div id="display-section">
      <div class="display-container">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="images/display.jpg"
                class="d-block w-100"
                alt="display"
              />
            </div>
            <div class="carousel-item">
              <img
                src="images/display-2.jpg"
                class="d-block w-100"
                alt="display"
              />
            </div>
            <div class="carousel-item">
              <img
                src="images/display-3.jpg"
                class="d-block w-100"
                alt="display"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default PropertyPage
