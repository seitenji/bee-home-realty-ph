import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
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

          <div className="property-summary mt-md-5 mt-4">
            <h3>Map</h3>
            {/* <div id="googleMap" style="width:100%;height:400px;" /> */}
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
      frontmatter {
        name
        room
        size
        price
      }
    }
  }
`
