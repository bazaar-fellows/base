import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions';


class CartNum extends Component {
  render() {
    console.log('things in cart!!!!', this.props)
    return (
      <div>
        {this.props.cart.length}
      </div>
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
)(CartNum);
