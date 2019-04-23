import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from "nuka-carousel"

import Layout from "../components/layout"
import CheckAlso from "../components/checkAlso"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      {/* Display Property Section */}
      <div id="display-section">
        <div className="display-container">
          <Carousel>
            {post.frontmatter.slide.map(slide => (
              <Img key={slide.id} fluid={slide.childImageSharp.fluid} />
            ))}
          </Carousel>
        </div>
      </div>

      {/* Property Detail Section */}
      <div id="property-detail-section">
        <div className="section">
          <div className="property-address mt-md-5 mt-4">
            <h6 className="mb-3 text-secondary">{post.frontmatter.type}</h6>
            <h2>{post.frontmatter.location}</h2>
            <h4>{post.frontmatter.name}</h4>
          </div>

          <div className="property-detail mt-md-5 mt-4">
            <div className="row">
              <div className="col">
                <p className="font-weight-bold">Rooms:</p>
              </div>
              <div className="col">
                <p>{post.frontmatter.room}</p>
              </div>
              <div className="w-100" />
              <div className="col">
                <p>Square Meter:</p>
              </div>
              <div className="col">
                <p className="text-bold">{post.frontmatter.size}</p>
              </div>
              <div className="w-100" />
              <div className="col">
                <p>Price:</p>
              </div>
              <div className="col">
                <p className="text-bold">{post.frontmatter.price}</p>
              </div>
            </div>
          </div>

          <div className="property-summary mt-md-5 mt-4">
            <h3>Summary</h3>
            <ul className="list-group list-group-flush">
              {post.frontmatter.summary.map(summary => (
                <li key={summary} className="list-group-item">
                  {summary}
                </li>
              ))}
            </ul>
          </div>

          <div className="property-summary mt-md-5 mt-4">
            <h3>Neighbors</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>

          <div className="property-summary mt-md-5 mt-4">
            <h3>Map</h3>
            <div id="map" />
          </div>

          {/* Check also */}
          <div class="check-also mt-md-5 mt-4">
            <h5>Check also</h5>
            <CheckAlso />
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        name
        location
        room
        size
        price
        image {
          childImageSharp {
            fluid(quality: 70) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        slide {
          id
          childImageSharp {
            fluid(quality: 90, maxWidth: 700, maxHeight: 420) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        summary
        type
      }
    }
  }
`
