import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import "./layout.scss"
import "bootstrap/dist/css/bootstrap.css"

import Header from "./header"
import SubFooter from "./subFooter"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          bodyAttributes={{
            style: "background-color : #f3f3f3",
          }}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <SubFooter />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
