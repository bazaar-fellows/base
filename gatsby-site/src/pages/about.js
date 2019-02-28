import React, { Component } from 'react'
import Header from '../components/header';

import './about.scss';




export class about extends Component {
  render() {
    return (
      <div>
        <Header siteTitle={'Bazaar'} />
        <img src='https://images.unsplash.com/photo-1539078274334-d60031017381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' />

      </div>
    )
  }
}

export default about
