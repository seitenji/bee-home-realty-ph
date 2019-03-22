import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

function PropertPage({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title="Property" keywords={[`Real Estate`, `Listing`, `Manila`]} />
      {/* Property-Detail Section */}
      <div id="property-detail-section">
        <div className="section">
          <div className="property-address mt-md-5 mt-4">
            <h4>{post.frontmatter.name}</h4>
            <h2>{post.frontmatter.location}</h2>
          </div>

          <div className="property-detail mt-md-5 mt-4">
            <div className="row">
              <div className="col">
                <p className="font-weight-bold">Rooms:</p>
              </div>
              <div className="col">
                <p className="font-weight-bold">{post.frontmatter.room}</p>
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
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
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
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
export default PropertPage

export const postQuery = graphql`
  query PropertyPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        name
        location
        room
        size
        image {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
