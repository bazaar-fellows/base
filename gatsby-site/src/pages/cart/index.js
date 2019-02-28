import React, { Component } from 'react'

import { Provider } from "react-redux";
import { store } from '../index.js';
import ViewCart from '../../components/view-cart.js';
import PayPalBtn from '../../components/PayPalBtn';

import '../../components/view-cart.scss'

class Cart extends Component {
  render() {
    console.log('the items in cart :)');
    return (
      <Provider store={store}>
        <div className='main-cart-container'>
          <ViewCart />
          <PayPalBtn total={50} />
        </div>
      </Provider>
    )
  }
}

export default Cart