import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SalePage = ({ data }) => (
  <Layout>
    <SEO title="Properties" keywords={[`Real Estate`, `Listing`, `Manila`]} />
    <div id="list-section">
      <div className="section">
        <h1 className="title text-center">Buy</h1>

        {/* <form className="mt-5">
      <div className="form-row justify-content-center">
        <div className="col-md-5   col-sm-12 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a location"
          />
        </div>
        <div className="col-md-auto mb-3">
          <button
            type="button"
            className="btn btn-outline-success btn-block"
            id="btn-price-drop"
          >
            Price <i className="fas fa-caret-down" />
          </button>
          <div className="form-popup" id="price-drop">
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" />
              </div>
              <p className="mt-1">to</p>
              <div className="col">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-auto mb-3">
          <button
            type="button"
            className="btn btn-outline-success btn-block"
            id="btn-room-drop"
          >
            Number of room <i className="fas fa-caret-down" />
          </button>
          <div className="form-popup" id="room-drop">
            <div>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="col-md-auto mb-3">
          <button
            type="button"
            className="btn btn-outline-success btn-block"
            id="btn-size-drop"
          >
            Square meterage <i className="fas fa-caret-down" />
          </button>
          <div className="form-popup" id="size-drop">
            <div>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-warning btn-block mb">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form> */}

        <div className="card-deck">
          {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id} className="col-md-4 col-xs-6">
              <div className="card mb-4">
                <Link to={post.node.fields.slug}>
                  <Img
                    fluid={post.node.frontmatter.image.childImageSharp.fluid}
                  />
                </Link>
                <div className="card-body">
                  <Link to={post.node.fields.slug} className="text-dark">
                    <h6 className="card-subtitle mb-2 text-muted">
                      {post.node.frontmatter.name}
                    </h6>
                    <h5 className="card-title">
                      {post.node.frontmatter.location}
                    </h5>
                  </Link>
                  <p className="card-text">
                    Rooms: {post.node.frontmatter.room}
                  </p>
                  <p className="card-text">
                    Square meter: {post.node.frontmatter.size}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)
export default SalePage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "For sale" } } }) {
      edges {
        node {
          id
          frontmatter {
            path
            name
            location
            room
            size
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
