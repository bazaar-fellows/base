import React, { Component } from 'react'
import Header from '../components/header';

import './contact.scss'

export class contact extends Component {
  render() {
    return (
      <div>
        <Header siteTitle={'Bazaar'} />
        <div className='contact-container'>
          <h1>Contact Us</h1>
          <input type="text" />
          <input type="text" />
          <textarea type='text' />
          <button>Send!</button>
        </div>
      </div>
    )
  }
}

export default contact
