import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {connect} from 'react-redux';
import CartNum from './cart-num';
import './header.scss';
import ColorThemeButton from './ColorThemeButton';

const Header = ({ siteTitle }, props) => (
    <header className={props.colorTheme}>
      <div>
        <Link className="cart" to='/cart'><span>🛒</span>cart
        <CartNum/>
        </Link>
      </div>

      <ColorThemeButton />

      <div>
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const mapStateToProps = state => ({
  colorTheme: state.data.colorTheme
});

export default connect(
  mapStateToProps,
)(Header);

