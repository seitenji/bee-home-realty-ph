import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InputGroup from "react-bootstrap/InputGroup"
import DropdownButton from "react-bootstrap/DropdownButton"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const RentPage = ({ data }) => (
  <Layout>
    <SEO title="Properties" keywords={[`Real Estate`, `Listing`, `Manila`]} />
    <div id="list-section">
      <div className="section">
        <h1 className="title text-center">Rent</h1>

        <InputGroup className="mb-4">
          <FormControl
            placeholder="Enter a location"
            aria-label="Enter a location"
            aria-describedby="basic-addon2"
          />

          <DropdownButton
            as={InputGroup.Append}
            variant="success"
            title="Price"
            id="input-group-dropdown-2"
          >
            <FormControl />
          </DropdownButton>
          <DropdownButton
            as={InputGroup.Append}
            variant="success"
            title="Number of room"
            id="input-group-dropdown-2"
          >
            <FormControl />
          </DropdownButton>
          <DropdownButton
            as={InputGroup.Append}
            variant="success"
            title="Square meterage"
            id="input-group-dropdown-2"
          >
            <FormControl />
          </DropdownButton>
          <InputGroup.Append>
            <Button variant="warning">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup.Append>
        </InputGroup>

        <div className="card-deck">
          {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id} className="col-md-4 col-xs-6">
              <div className="card mb-4">
                <Link to={post.node.fields.slug}>
                  <Img
                    fluid={post.node.frontmatter.image.childImageSharp.fluid}
                    className="image"
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
export default RentPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "For rent" } } }) {
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
