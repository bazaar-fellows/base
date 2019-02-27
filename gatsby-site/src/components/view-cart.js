import { connect } from 'react-redux'
import React, { Component } from 'react'
import * as actions from '../redux/actions.js';
import PayPalBtn from './PayPalBtn';

class ViewCart extends Component {
  state = {
    isCartCleared: false
  }

  render() {
    console.log('items from redux store', this.props);
    return (
      <React.Fragment>
        <div>
          <div>hello from view-cart</div>
          {this.props.cart.map(item => (
            <div>{item.name}: {item.id}</div>
          ))}

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
