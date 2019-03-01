import React, { Component } from 'react';
import Modal from 'react-modal';
import Auth from '../auth/auth';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';
import './design/modal.scss';


import DeleteProduct from '../components/apollo/delete-products.js';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export class Card extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  editItem = (id) => {
    //edit the item
  }
  
  deleteItem = (id) => {
    console.log('my props content❤️', this.props.content);

    }

  addToCart = (id, name, price, description) =>{
    this.props.updateCart(id, name, price, description);
  }


  render() {
    return (
      <div className="card">
        <div>{this.props.content.name}</div>
        <img alt='product' src={this.props.content.description} style={{ width: "200px", height: '200px' }} />
        <div>{this.props.content.price}</div>
        <Auth capibility="delete">
          <DeleteProduct productId={this.props.content._id} productName={this.props.content.name}/>
        </Auth>


        <button onClick={() => this.setModalVisible(!this.state.modalVisible)}>Learn More</button>
        <Modal
          className="Modal"
          overlayClassName="Overlay"
          isOpen={this.state.modalVisible}
          onRequestClose={this.modalVisible}
          style={customStyles}
          contentLabel="Example Modal">
          <h1>{this.props.content.name}</h1>
          <img alt='product' src={this.props.content.description} style={{ width: "500px", height: '500px' }} />
          <div>{this.props.content.price}</div>

          <Auth capibility="update">
            <button className='editButton' onClick={() => this.editItem(this.props.content._id)}>Edit Product</button>
          </Auth>

          <Auth capibility="delete">
            <button className='deleteButton' onClick={() => this.deleteItem(this.props.content._id)}>Delete Product</button>
          </Auth>

          <button onClick={() => this.addToCart(
            this.props.content._id,
            this.props.content.name,
            this.props.content.price,
            this.props.content.description)
            }>Add To Cart</button>
          <button onClick={() => this.setModalVisible(!this.state.modalVisible)}>CLOSE!</button>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, getState) => ({
  updateCart: (id, name, price, description) => dispatch(actions.updateCart(id, name, price, description)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
