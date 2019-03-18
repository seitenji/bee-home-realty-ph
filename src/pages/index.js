import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  faSearch,
  faCaretDown,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import logo from "../images/img-logo.png"

import classNames from "classnames"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Real Estate`, `Listing`, `Manila`]} />

    {/* Showcase Section */}
    <div className={classNames("section-main", "container-fluid")}>
      <div className={classNames("search-section", "container")}>
        <h1 className={classNames("h1-showcase", "display-md-1", "text-white")}>
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
      <div className="section">
        <h1 className={classNames("title", "text-center")}>Choose</h1>

        <div className={classNames("row", "mx-lg-6")}>
          <Link to="/" className="text-white col-sm">
            <div className="choice-a img-thumbnail">
              <p className="choice font-weight-bold">BUY</p>
            </div>
          </Link>
          <p className="text-center mt-3 col-md-2 col-sm-1 align-self-center">
            or
          </p>
          <Link to="/" className="text-white col-sm">
            <div className="choice-b img-thumbnail col-sm">
              <p className="choice font-weight-bold text-white">RENT</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    {/* End of Choose Section */}

    {/* Featured Section */}
    <div id="featured-section">
      <div className="section">
        <h1 className="title text-center">Featured Properties</h1>

        <div className="card-deck">
          <div className="card">
            <Link to="/">
              <img
                src="https://source.unsplash.com/1600x900/?house, condo"
                className="card-img-top"
                alt="property"
              />
            </Link>
            <div className="card-body">
              <Link to="/" className="text-dark">
                <h6 className="card-subtitle mb-2 text-muted">South Pauline</h6>
                <h5 className="card-title">13042 Bogisich Common</h5>
              </Link>
              <p className="card-text">Rooms: 2</p>
              <p className="card-text">Square meter: 150 SqM</p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://source.unsplash.com/1600x900/?house, apartment"
              className="card-img-top"
              alt="property"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://source.unsplash.com/1600x900/?house, room"
              className="card-img-top"
              alt="property"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>

        <div className="card-deck mt-sm-4">
          <div className="card">
            <img
              src="https://source.unsplash.com/1600x900/?house, bedroom"
              className="card-img-top"
              alt="property"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://source.unsplash.com/1600x900/?house, hotel"
              className="card-img-top"
              alt="property"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://source.unsplash.com/1600x900/?house, home"
              className="card-img-top"
              alt="property"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-md-3">
          <button type="button" className="mx-auto btn btn-link text-success">
            See more <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>
      </div>
    </div>
    {/* End of Featured Section */}

    {/* About Section */}
    <div id="about-section">
      <div className="section">
        <h1 className="title text-center">Why work with us?</h1>

        <div className="card-about">
          <div className="card-about-logo">
            <img src={logo} alt="logo" className="img-thumbnail" />
          </div>

          <div className="card-about-text">
            <p className="lead p-title">INTEGRITY</p>
            <p>
              High standards of honesty and strong
              <br />
              moral principles.
            </p>
            <p className="lead p-title">LOYALTY</p>
            <p>
              Being faithful and trustworthy to be able to keep long time
              relationships.
            </p>
            <p className="lead p-title">COMMITMENT TO EXCELLENCE</p>
            <p>
              Providing our customers with quality services to address their
              needs.
            </p>
            <p className="lead p-title">TRANSPARENCY</p>
            <p>Being accountable and open in all our business practices.</p>
            <p className="lead p-title">PASSION</p>
            <p>
              Working beyond what is needed and with dedication at all time.
            </p>
            <p className="lead p-title">INNOVATION</p>
            <p>
              Thinking outside the box, being creative and seizing oppurtunities
              to grow.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* End of About Section */}

    {/* Services Section */}
    <div id="services-section">
      <div className="section">
        <h1 className="title text-center">Services</h1>

        <p className="lead">
          BEE HOME REALTY, INC. is set to offer a variety of services within the
          scope of the real estate industry in the Philippines.
          <br />
          <br />
          Our business offering are listed below;
        </p>

        <div className="row text-left services-text">
          <div className="col-sm">
            <p>
              <FontAwesomeIcon icon={faCheckCircle} className="check-circle" />{" "}
              Facilitating a Purcahse.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheckCircle} className="check-circle" />{" "}
              Facilitating a Sale.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheckCircle} className="check-circle" />{" "}
              Documentation preparation.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheckCircle} className="check-circle" />{" "}
              Property Management.
            </p>
          </div>
          <div className="col-sm">
            <p>
              <FontAwesomeIcon icon={faCheckCircle} className="check-circle" />{" "}
              Exchanging property.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheckCircle} className="check-circle" />{" "}
              Auctioning property.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheckCircle} className="check-circle" />{" "}
              Preparing contracts and leases.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheckCircle} className="check-circle" />{" "}
              Listing the property for sale to the public.
            </p>
          </div>
        </div>

        <div className="text-center mt-md-3">
          <button
            type="button"
            className="mx-auto btn btn-link text-success"
            data-toggle="modal"
            data-target="#exampleModalScrollable"
          >
            See more <FontAwesomeIcon icon={faCaretDown} />
          </button>

          <div
            className="modal fade"
            id="exampleModalScrollable"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-scrollable"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalScrollableTitle">
                    Our product and services
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body text-left">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Facilitating a purchase - guiding a buyer through the
                      process.
                    </li>
                    <li className="list-group-item">
                      Facilitating a sale - guiding a seller through the selling
                      process.
                    </li>
                    <li className="list-group-item">
                      Document preparation - preparing the necessary paperwork
                      for "For Sale by Owner" sellers.
                    </li>
                    <li className="list-group-item">Property management.</li>
                    <li className="list-group-item">Exchanging property</li>
                    <li className="list-group-item">Auctioning property.</li>
                    <li className="list-group-item">
                      Preparing contracts and leases.
                    </li>
                    <li className="list-group-item">
                      Listing the property for sale to the public.
                    </li>
                    <li className="list-group-item">
                      Providing the seller with a real property condition
                      disclosure (if required by law) and other necessary forms.
                    </li>
                    <li className="list-group-item">
                      Holding an open house to show the property.
                    </li>
                    <li className="list-group-item">
                      Serving as a contact available to answer any question
                      about the property and schedule showing appointments.
                    </li>
                    <li className="list-group-item">
                      Ensuring that buyers are pre-screened and financially
                      qualified to buy the property.
                    </li>
                    <li className="list-group-item">
                      Negotiating price on behalf of the sellers.
                    </li>
                    <li className="list-group-item">
                      Acts as a fiduciary for the seller, which may include
                      preparing standard real estate purchase contract.
                    </li>
                    <li className="list-group-item">
                      Selling of Fully Furnished Properties, Pre-Selling and
                      Resale Properties.
                    </li>
                    <li className="list-group-item">
                      Selling of Landed Properties
                    </li>
                    <li className="list-group-item">
                      Real Estate Consultancy and Advisory Services
                    </li>
                  </ul>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
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
      <div className="section">
        <h1 className="title text-center">Testimonials</h1>
        <p className="lead">
          We are proud to say that our clients are satisfied and happy simply
          because we receive more referrals from them.
        </p>

        <div className="card-deck text-center">
          <div className="card">
            <div className="card-body">
              <img
                className="rounded-circle border border-info card-img-top"
                src="images/img_holder.png"
                alt="clients"
              />
              <p className="card-text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                reiciendis dicta totam, blanditiis ullam omnis in praesentium
                quas dolorem tempore?
              </p>
              <h5 className="card-title mt-3">Rahsaan Satterfield DDS</h5>

              <p className="card-text">
                <small className="text-muted">
                  Dynamic Optimization Officer
                </small>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img
                className="rounded-circle border border-info card-img-top"
                src="images/img_holder.png"
                alt="clients"
              />
              <p className="card-text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem iure vero at illo maiores, tempore cupiditate officia
                et nesciunt quisquam?
              </p>
              <h5 className="card-title mt-3">Emmanuel Hintz I</h5>

              <p className="card-text">
                <small className="text-muted">Legacy Division Supervisor</small>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img
                className="rounded-circle border border-info card-img-top"
                src="images/img_holder.png"
                alt="clients"
              />
              <p className="card-text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius
                eligendi reiciendis non ad consequuntur tempora repudiandae
                placeat beatae, voluptatum, temporibus quae corporis magnam
                deserunt!
              </p>
              <h5 className="card-title mt-3">David Marks</h5>

              <p className="card-text">
                <small className="text-muted">
                  Dynamic Directives Orchestrator
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-md-3">
          <button type="button" className="mx-auto btn btn-link text-success">
            See more <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>
      </div>
    </div>
    {/* End of Testimonial Section */}
  </Layout>
)

export default IndexPage
