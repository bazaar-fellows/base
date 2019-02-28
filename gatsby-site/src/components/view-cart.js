import { connect } from 'react-redux'
import React, { Component } from 'react'
import * as actions from '../redux/actions.js';
import PayPalBtn from './PayPalBtn';
import { Link } from "gatsby";

import './view-cart.scss'

class ViewCart extends Component {
  state = {
    isCartCleared: false
  }

  render() {
    console.log('items from redux store', this.props);
    return (
      <React.Fragment>
        <div className='cart'>
          <h2>Your Shopping Cart</h2>
          <div className='cartContainer'>
            {this.props.cart.map(item => (
              <div className='singleCartItem'>
                <div>{item.name}</div>
                <div>${item.price}.00</div>
                {/* {item.name}: {item.price} */}

              </div>
            ))}
          </div>
          <Link to="/products">Continue Shopping!</Link>

        </div>
        {/* pass card totals, cardlist  */}
        {/* maybe add clearCart={true} as props */}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.data.cart
});

const mapDispatchToProps = (dispatch, getState) => ({
  updateCart: id => dispatch(actions.updateCart(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCart);
