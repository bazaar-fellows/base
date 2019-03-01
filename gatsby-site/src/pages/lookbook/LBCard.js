import React, { Component } from 'react'

import '../../components/design/lbDeck.scss'

export class LBCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.content} alt="dog" />
      </div>
    )
  }
}

export default LBCard
