import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "img-landing.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={() => {
      return (
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

          {/* Showcase Section */}
          <div className={classNames("section-main", "container-fluid")}>
            <div className={classNames("search-section", "container")}>
              <h1
                className={classNames(
                  "h1-showcase",
                  "display-md-1",
                  "text-white"
                )}
              >
                Find your new home.
              </h1>
              <form>
                <div className="form-row">
                  <div className={classNames("col", "mb-3")}>
                    <select className="form-control">
                      <option>Buy</option>
                      <option>Rent</option>
                    </select>
                  </div>
                  <div className={classNames("col-md-9", "mb-3")}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter a location"
                    />
                  </div>
                  <div className="col">
                    <button
                      type="submit"
                      className={classNames("btn", "btn-warning", "btn-block")}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* End of Showcase Section */}

          {/* Choose Section */}
          <div id="search-section">
            <div class="section">
              <h1 class="title text-center">Choose</h1>

              <div class="row mx-lg-6">
                <a href="#" class="text-white col-sm">
                  <div class="choice-a img-thumbnail">
                    <p class="choice font-weight-bold">BUY</p>
                  </div>
                </a>
                <p class="text-center mt-3 col-md-2 col-sm-1 align-self-center">
                  or
                </p>
                <a href="#" class="text-white col-sm">
                  <div class="choice-b img-thumbnail col-sm">
                    <p class="choice font-weight-bold text-white">RENT</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* End of Choose Section */}

          {/* Featured Section */}
          <div id="featured-section">
            <div class="section">
              <h1 class="title text-center">Featured Properties</h1>

              <div class="card-deck">
                <div class="card">
                  <a href="property.html">
                    <img
                      src="https://source.unsplash.com/1600x900/?house, condo"
                      class="card-img-top"
                      alt="property"
                    />
                  </a>
                  <div class="card-body">
                    <a class="text-dark" href="property.html">
                      <h6 class="card-subtitle mb-2 text-muted">
                        South Pauline
                      </h6>
                      <h5 class="card-title">13042 Bogisich Common</h5>
                    </a>
                    <p class="card-text">Rooms: 2</p>
                    <p class="card-text">Square meter: 150 SqM</p>
                  </div>
                </div>
                <div class="card">
                  <img
                    src="https://source.unsplash.com/1600x900/?house, apartment"
                    class="card-img-top"
                    alt="property"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    src="https://source.unsplash.com/1600x900/?house, room"
                    class="card-img-top"
                    alt="property"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>

              <div class="card-deck mt-sm-4">
                <div class="card">
                  <img
                    src="https://source.unsplash.com/1600x900/?house, bedroom"
                    class="card-img-top"
                    alt="property"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    src="https://source.unsplash.com/1600x900/?house, hotel"
                    class="card-img-top"
                    alt="property"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    src="https://source.unsplash.com/1600x900/?house, home"
                    class="card-img-top"
                    alt="property"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>

              <div class="text-center mt-md-3">
                <button type="button" class="mx-auto btn btn-link">
                  See more <i class="fas fa-caret-down" />
                </button>
              </div>
            </div>
          </div>
          {/* End of Featured Section */}

          {/* About Section */}
          <div id="about-section">
            <div class="section">
              <h1 class="title text-center">Why work with us?</h1>

              <div class="card-about">
                <div class="card-about-logo">
                  <img
                    src="images/img_logo.png"
                    alt="logo"
                    class="img-thumbnail"
                  />
                </div>

                <div class="card-about-text">
                  <p class="lead p-title">INTEGRITY</p>
                  <p>
                    High standards of honesty and strong
                    <br />
                    moral principles.
                  </p>
                  <p class="lead p-title">LOYALTY</p>
                  <p>
                    Being faithful and trustworthy to be able to keep long time
                    relationships.
                  </p>
                  <p class="lead p-title">COMMITMENT TO EXCELLENCE</p>
                  <p>
                    Providing our customers with quality services to address
                    their needs.
                  </p>
                  <p class="lead p-title">TRANSPARENCY</p>
                  <p>
                    Being accountable and open in all our business practices.
                  </p>
                  <p class="lead p-title">PASSION</p>
                  <p>
                    Working beyond what is needed and with dedication at all
                    time.
                  </p>
                  <p class="lead p-title">INNOVATION</p>
                  <p>
                    Thinking outside the box, being creative and seizing
                    oppurtunities to grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of About Section */}

          {/* Services Section */}
          <div id="services-section">
            <div class="section">
              <h1 class="title text-center">Services</h1>

              <p class="lead">
                BEE HOME REALTY, INC. is set to offer a variety of services
                within the scope of the real estate industry in the Philippines.
                <br />
                <br />
                Our business offering are listed below;
              </p>

              <div class="row text-left services-text">
                <div class="col-sm">
                  <p>
                    <i class="fas fa-check-circle check-circle" /> Facilitating
                    a Purcahse.
                  </p>
                  <p>
                    <i class="fas fa-check-circle check-circle" /> Facilitating
                    a Sale.
                  </p>
                  <p>
                    <i class="fas fa-check-circle check-circle" /> Documentation
                    preparation.
                  </p>
                  <p>
                    <i class="fas fa-check-circle check-circle" /> Property
                    Management.
                  </p>
                </div>
                <div class="col-sm">
                  <p>
                    <i class="fas fa-check-circle check-circle" /> Exchanging
                    property.
                  </p>
                  <p>
                    <i class="fas fa-check-circle check-circle" /> Auctioning
                    property.
                  </p>
                  <p>
                    <i class="fas fa-check-circle check-circle" /> Preparing
                    contracts and leases.
                  </p>
                  <p>
                    <i class="fas fa-check-circle check-circle" /> Listing the
                    property for sale to the public.
                  </p>
                </div>
              </div>

              <div class="text-center mt-md-3">
                <button
                  type="button"
                  class="mx-auto btn btn-link"
                  data-toggle="modal"
                  data-target="#exampleModalScrollable"
                >
                  See more <i class="fas fa-caret-down" />
                </button>

                <div
                  class="modal fade"
                  id="exampleModalScrollable"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalScrollableTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-scrollable"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5
                          class="modal-title"
                          id="exampleModalScrollableTitle"
                        >
                          Our product and services
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body text-left">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">
                            Facilitating a purchase - guiding a buyer through
                            the process.
                          </li>
                          <li class="list-group-item">
                            Facilitating a sale - guiding a seller through the
                            selling process.
                          </li>
                          <li class="list-group-item">
                            Document preparation - preparing the necessary
                            paperwork for "For Sale by Owner" sellers.
                          </li>
                          <li class="list-group-item">Property management.</li>
                          <li class="list-group-item">Exchanging property</li>
                          <li class="list-group-item">Auctioning property.</li>
                          <li class="list-group-item">
                            Preparing contracts and leases.
                          </li>
                          <li class="list-group-item">
                            Listing the property for sale to the public.
                          </li>
                          <li class="list-group-item">
                            Providing the seller with a real property condition
                            disclosure (if required by law) and other necessary
                            forms.
                          </li>
                          <li class="list-group-item">
                            Holding an open house to show the property.
                          </li>
                          <li class="list-group-item">
                            Serving as a contact available to answer any
                            question about the property and schedule showing
                            appointments.
                          </li>
                          <li class="list-group-item">
                            Ensuring that buyers are pre-screened and
                            financially qualified to buy the property.
                          </li>
                          <li class="list-group-item">
                            Negotiating price on behalf of the sellers.
                          </li>
                          <li class="list-group-item">
                            Acts as a fiduciary for the seller, which may
                            include preparing standard real estate purchase
                            contract.
                          </li>
                          <li class="list-group-item">
                            Selling of Fully Furnished Properties, Pre-Selling
                            and Resale Properties.
                          </li>
                          <li class="list-group-item">
                            Selling of Landed Properties
                          </li>
                          <li class="list-group-item">
                            Real Estate Consultancy and Advisory Services
                          </li>
                        </ul>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of Services Section */}

          {/* Testimonials Section */}
          <div id="testimonials-section">
            <div class="section">
              <h1 class="title text-center">Testimonials</h1>
              <p class="lead">
                We are proud to say that our clients are satisfied and happy
                simply because we receive more referrals from them.
              </p>

              <div class="card-deck text-center">
                <div class="card">
                  <div class="card-body">
                    <img
                      class="rounded-circle border border-info"
                      src="images/img_holder.png"
                      class="card-img-top"
                      alt="clients"
                    />
                    <p class="card-text mt-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni reiciendis dicta totam, blanditiis ullam omnis in
                      praesentium quas dolorem tempore?
                    </p>
                    <h5 class="card-title mt-3">Rahsaan Satterfield DDS</h5>

                    <p class="card-text">
                      <small class="text-muted">
                        Dynamic Optimization Officer
                      </small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <img
                      class="rounded-circle border border-info"
                      src="images/img_holder.png"
                      class="card-img-top"
                      alt="clients"
                    />
                    <p class="card-text mt-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem iure vero at illo maiores, tempore cupiditate
                      officia et nesciunt quisquam?
                    </p>
                    <h5 class="card-title mt-3">Emmanuel Hintz I</h5>

                    <p class="card-text">
                      <small class="text-muted">
                        Legacy Division Supervisor
                      </small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <img
                      class="rounded-circle border border-info"
                      src="images/img_holder.png"
                      class="card-img-top"
                      alt="clients"
                    />
                    <p class="card-text mt-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut eius eligendi reiciendis non ad consequuntur tempora
                      repudiandae placeat beatae, voluptatum, temporibus quae
                      corporis magnam deserunt!
                    </p>
                    <h5 class="card-title mt-3">David Marks</h5>

                    <p class="card-text">
                      <small class="text-muted">
                        Dynamic Directives Orchestrator
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="text-center mt-md-3">
                <button type="button" class="mx-auto btn btn-link">
                  See more <i class="fas fa-caret-down" />
                </button>
              </div>
            </div>
          </div>
          {/* End of Testimonial Section */}
        </Layout>
      )
    }}
  />
)

export default IndexPage
