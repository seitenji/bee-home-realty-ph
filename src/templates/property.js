import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from "nuka-carousel"

import Layout from "../components/layout"
import CheckAlso from "../components/checkAlso"
// import Map from "../components/mapContainer"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      {/* Display Property Section */}
      <div id="display-section">
        <div className="display-container">
          <Carousel>
            {post.frontmatter.slide.map(slide => (
              <Img
                key={slide.id}
                fluid={slide.childImageSharp.fluid}
                alt="property-image"
              />
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

          <div className="mt-md-5 mt-4 bg-white">
            <div className="property-detail">
              <table className="property-detail table table-hover table-bordered table-light">
                <tbody>
                  <tr>
                    <td>Rooms:</td>
                    <td>
                      <p className="h6">{post.frontmatter.room}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Square Meter:</td>
                    <td>
                      <p className="h6">{post.frontmatter.size}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Price:</td>
                    <td>
                      <p className="h6">{post.frontmatter.price}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <div className="mt-md-5 mt-4 bg-white">
            <div className="property-detail row pl-md-4">
              <div className="col">
                <p className="font-weight-bold">Rooms:</p>
              </div>
              <div className="col">
                
              </div>
              <div className="w-100" />
              <div className="col">
                <p>Square Meter:</p>
              </div>
              <div className="col">
                <p className="h5">{post.frontmatter.size}</p>
              </div>
              <div className="w-100" />
              <div className="col">
                <p>Price:</p>
              </div>
              <div className="col">
                <p className="h5">{post.frontmatter.price}</p>
              </div>
            </div>
          </div> */}

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
            </ul>
          </div>

          <div className="property-summary mt-md-5 mt-4">
            <h3>Amenities</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
            </ul>
          </div>

          <div className="property-summary mt-md-5 mt-4">
            <h3>Map</h3>
            <div id="map">
              {/* <Map /> */}
              {/*  */}
              {/* Try having static map and then when click goes to map.google.com */}
              {/*  */}
            </div>
          </div>

          {/* Check also */}
          <div className="check-also mt-md-5 mt-4">
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
