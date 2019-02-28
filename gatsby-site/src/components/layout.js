import React from "react"
import PropTypes from "prop-types"

import { StaticQuery, graphql } from "gatsby"
import { connect } from 'react-redux';


import LoginContext from "../auth/context";
import './layout.scss';
import Header from "./header"
import Footer from './footer'

const Layout = ({ children }, props) => (
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

        <Header colorTheme={props.colorTheme} siteTitle={data.site.siteMetadata.title} />
        <div className="contentContainer" className={props.colorTheme}>
          <main>{children}</main>
        </div>

        <Footer />
      </LoginContext>
    )}
  />
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = state => ({
  colorTheme: state.data.colorTheme
});

export default connect(
  mapStateToProps
)(Layout);
