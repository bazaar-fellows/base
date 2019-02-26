import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from './nav'
import './header.scss';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link className="cart" to='/cart'>🛒 cart</Link>
    </div>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
