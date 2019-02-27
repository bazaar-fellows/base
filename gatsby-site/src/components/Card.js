import React, { Component } from 'react';
import Modal from 'react-modal';

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


  render() {
    console.log('hello from CARDSSSS', this.props);
    return (
      <div>
        <div>{this.props.content.name}</div>
        <img src={this.props.content.image} style={{ width: "200px", height: '200px' }} />
        <div>{this.props.content.description}</div>


        <button onClick={() => this.setModalVisible(!this.state.modalVisible)}>Learn More</button>
        <Modal
          isOpen={this.state.modalVisible}
          onRequestClose={this.modalVisible}
          style={customStyles}
          contentLabel="Example Modal">
          <h1>{this.props.content.name}</h1>
          <img src={this.props.content.image} style={{ width: "500px", height: '500px' }} />
          <div>{this.props.content.description}</div>
          <div>{this.props.content.price}</div>
          <button>Add To Cart</button>
          <button onClick={() => this.setModalVisible(!this.state.modalVisible)}>CLOSE!</button>
        </Modal>
      </div>
    )
  }
}

export default Card
