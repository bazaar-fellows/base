import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions';
import { Provider } from 'react-redux';


class CartNum extends Component {
  render() {
    return (

      <Provider>
        <div>
          {this.props.cart.length}
        </div>
      </Provider>

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
