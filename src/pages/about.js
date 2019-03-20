import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import imgBenilda from "../images/benilda.jpg"
import imgDoris from "../images/doris.jpg"
import imgShiela from "../images/shiela.jpg"
import imgMarita from "../images/marita.jpg"
import imgAbout from "../images/img-about.jpg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`Real Estate`, `Listing`, `Manila`]} />

    {/* About Section */}
    <div id="about-section">
      <div className="section">
        <h1 className="title text-center">About</h1>

        <div className="about-a">
          <div className="about-a-text">
            <div className="card">
              <div className="card-body pl">
                <h1>10 Years in Service.</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae magni nam illo.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo, voluptas!
                </p>
              </div>
            </div>
          </div>

          <div className="about-a-image">
            <img src={imgAbout} alt="about" />
          </div>
        </div>

        <div className="about-b">
          <div className="about-b-text">
            <div className="card">
              <div className="card-body pr">
                <h1>Excellence.</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae magni nam illo.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo, voluptas!
                </p>
              </div>
            </div>
          </div>

          <div className="about-b-image">
            <img src={imgAbout} alt="about" />
          </div>
        </div>
      </div>
    </div>

    {/* Team Section */}
    <div id="team-section">
      <div className="section">
        <h1 className="title text-center">Meat the team</h1>
        <p className="text-center">
          We are composed of five unique individuals who are experts in the
          field of real estate, as individuals brokers with solid experiences
          that ranges from 5 to 20 years and counting.
        </p>

        <div className="card-group text-center">
          <div className="card">
            <img src={imgDoris} className="card-img-top" alt="agent" />
            <div className="card-body">
              <h5 className="card-title">Ma. Drois L. Tabios</h5>
              <p className="card-text">Marketing President</p>
            </div>
          </div>
          <div className="card">
            <img
              src="images/img_holder.png"
              className="card-img-top"
              alt="agent"
            />
            <div className="card-body">
              <h5 className="card-title">Melissa L. Madronio</h5>
              <p className="card-text">VP Marketing - Local</p>
            </div>
          </div>
        </div>

        <div className="card-group text-center">
          <div className="card">
            <img src={imgBenilda} className="card-img-top" alt="agent" />
            <div className="card-body">
              <h5 className="card-title">Benilda D. Bautista</h5>
              <p className="card-text">VP Marketing - International</p>
            </div>
          </div>
          <div className="card">
            <img src={imgMarita} className="card-img-top" alt="agent" />
            <div className="card-body">
              <h5 className="card-title">Marita R. Osita</h5>
              <p className="card-text">Treasurer</p>
            </div>
          </div>
          <div className="card">
            <img src={imgShiela} className="card-img-top" alt="agents" />
            <div className="card-body">
              <h5 className="card-title">Shiela Marie S. Enojo</h5>
              <p className="card-text">Secretary</p>
            </div>
          </div>
        </div>
      </div>
    </div>

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
          <button type="button" className="mx-auto btn btn-link">
            See more <i className="fas fa-caret-down" />
          </button>
        </div>
      </div>
    </div>
  </Layout>
)
export default AboutPage
