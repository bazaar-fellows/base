import React, { Component } from 'react'
import LBCard from './LBCard';

export class LBDeck extends Component {
  render() {
    console.log(this.props.pics[0], ' hahah');
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
