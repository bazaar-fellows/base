import {connect} from 'react-redux'
import React, { Component } from 'react'
import * as actions from '../redux/actions.js';

class ViewCart extends Component {
  render() {
    console.log('items from redux store', this.props);
    return (
      <div>
        <div>hello from view-cart</div>
       {this.props.cart.map(item=>(
         <div>{item.name}: {item.id}</div>
       ))}
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
)(ViewCart);
