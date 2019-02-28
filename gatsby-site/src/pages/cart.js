import React, { Component } from 'react'
import Header from '../components/header';
import Cart from './cart/index';

export class CartPage extends Component {
  render() {
    return (
      <div>
        <Header siteTitle={'Bazaar'} />
        <Cart />
        <h1>CART!!!!</h1>
      </div>
    )
  }
}

export default CartPage
