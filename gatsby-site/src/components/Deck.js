import React, { Component } from 'react';
import Card from './Card';

export class Deck extends Component {
  state = {
    products: [
      {
        id: 'abcedefhijk',
        name: "Shoes",
        description: 'A nice pair of shoes',
        price: '$40.00',
        qty: 10,
        image: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/oddgxdswqgfhnzbgoubg/juvenate-womens-shoe-nnTjnOM0.jpg'
      },
      {
        id: 'jklomnopqrcstuf',
        name: "Backpack",
        description: 'Very comfy backpack',
        price: '$60.00',
        qty: 8,
        image: 'https://cdn.shopify.com/s/files/1/0790/7429/products/FROST-PEACH_PINK_61e5f3bb-e853-48f9-a9e6-43e536cff073_530x.jpg?v=1545157541'
      },
    ]
  }
  render() {
    return (
      <div>
        <section className="deck">
          {this.state.products.map((card, i) => (
            <Card key={i} content={card} />
          ))}
        </section>
      </div>
    )
  }
}

export default Deck
