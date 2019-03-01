import React, { Component } from 'react'
import LBCard from './LBCard';

export class LBDeck extends Component {
  render() {
    return (
      <div>
        <section className="deck">
          {this.props.pics.map((pic, i) => (
            <LBCard key={i} content={pic} />
          ))}
        </section>
      </div>
    )
  }
}

export default LBDeck
