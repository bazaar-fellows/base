import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
mutation PostMutation($name: String!, $description: String!, $price: Float!, $qty: Int!, $category: String! ) {
  createProduct(input:{
    name: $name, description: $description, price: $price, qty: $qty, category: $category
  }
  ){
      name
      description
      price
      qty
      category{
          name
          _id
      }
  }
}
`

class CreateLink extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            description: '',
            price: 0,
            qty: 0,
            category: ''
        }
    }
 

  render() {
    const { name, description, price, qty } = this.state
    console.log('stuff from deck', this.props)
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="A name for the product"
          />
           <textarea
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the product"
          />
            <input
            className="mb2"
            value={price}
            onChange={e => this.setState({ price: parseInt(e.target.value) })}
            type="number"  
            placeholder="A price for the product"
          />   
            <input
            className="mb2"
            value={qty}
            onChange={e => this.setState({ qty: parseInt(e.target.value) })}
            type="number" 
            placeholder="Quantity of product"
          />   
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ name, description, price, qty, category: this.props.categoryId }}>
        {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
    </div>
    )
  }
}

export default CreateLink