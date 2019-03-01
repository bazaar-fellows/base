import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Input from '@material-ui/core/Input';

const POST_MUTATION = gql`
mutation DeleteMutation($_id: String!) {
    deleteProduct(_id: $_id){
        name
    }
}
`
 
class CreateDeleteProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            _id: ''
        }

    }


    vertifyDelete= (name) =>{
        if(this.props.productName === name){
            this.setState({_id: this.props.productId})
        }
    }



  render() {
    console.log('props from delete', this.props)
    const { _id } = this.props.productId
    return (
      <div>
        <div className="flex flex-column mt3">
          <Input
            className="mb2"
            value={_id}
            onSubmit={e => this.vertifyDelete(e.target.value)}
            type="text"
            placeholder="name of product"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ _id: this.props.productId }}>
        {postMutation => <button onClick={postMutation}>Delete</button>}
        </Mutation>
    </div>
    )
  }
}

export default CreateDeleteProduct