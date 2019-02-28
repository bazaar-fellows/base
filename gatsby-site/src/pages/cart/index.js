import React, { Component } from 'react'

import { Provider } from "react-redux";
import { store } from '../index.js';
import ViewCart from '../../components/view-cart.js';
import PayPalBtn from '../../components/PayPalBtn';

import '../../components/view-cart.scss'

class Cart extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='main-cart-container'>
          <ViewCart />
    
        </div>
      </Provider>
    )
  }
}

export default Cart