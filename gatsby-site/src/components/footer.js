import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './footer.scss';

const Footer = ({ siteTitle }) => (
    <footer>


      <div>
        <h1>
          <Link
            to="/"
            >
            {siteTitle}
            Copyright 2019 Bazaar-Fellows
          </Link>
        </h1>
      </div>

    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
  }
  
Footer.defaultProps = {
    siteTitle: ``,
  }
  
  export default Footer