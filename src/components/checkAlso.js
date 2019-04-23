import { Link } from "gatsby"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CheckAlso = ({ children }) => (
  <StaticQuery
    query={graphql`
      query AddIndexQuery {
        allMarkdownRemark(
          limit: 6
          filter: { frontmatter: { feature: { eq: "true" } } }
        ) {
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
    `}
    render={data => (
      <div>
        <div id="featured-section">
          <div className="section">
            <div className="card-deck">
              {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id} className="col-md-4 col-xs-6">
                  <div className="card mb-4">
                    <Link to={post.node.fields.slug}>
                      <Img
                        fluid={
                          post.node.frontmatter.image.childImageSharp.fluid
                        }
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
      </div>
    )}
  />
)

export default CheckAlso
