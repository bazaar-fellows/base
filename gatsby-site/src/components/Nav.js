import React, { Component } from 'react'
import './nav.scss';
import { Link } from 'gatsby';

export class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <Link className='productLink' to="/products">Shop</Link>
        <Link className='productLink' to="/about">About</Link>
        <Link className='productLink' to="/lookbook">Look Book</Link>
        <Link className='productLink' to="/contact">Contact</Link>
      </div>
    )
  }
}

export default Nav
