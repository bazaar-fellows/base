import React, { Component } from 'react'

import { Provider } from "react-redux";
import {store} from '../index.js';
import ViewCart from '../../components/view-cart.js';

class Cart extends Component {
  render() {
      console.log( 'the items in cart :)');
    return (
      <Provider store = {store}>
      <>
      <div>
        hello from cart
        
      </div>
      <ViewCart/>
      </>
      </Provider>
    )
  }
}

export default Cart