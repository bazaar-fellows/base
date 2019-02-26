import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Nav from "./nav.js";

import LoginContext from "../auth/context";
import './layout.scss';
import Header from "./header"
import Footer from './footer'
import { DH_CHECK_P_NOT_PRIME } from "constants";

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
      <LoginContext>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={"contentContainer"}>
          {/* <main>{children}</main> */}
          {/* include the deck component here */}
                    {/* deck component with render the list of cards */}

          <div className={"deck"}>
            <h2>My Product</h2>
            <p> This my product </p>
            <a> Click here to see more about the product</a>
          </div>
          <Nav className="nav"/>
        </div>
        <Footer />
      </LoginContext>
    )}
  />
)



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
