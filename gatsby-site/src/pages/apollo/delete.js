import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
mutation DeleteMutation($_id: String!) {
    deleteCategory(_id: $_id){
        _id
        name
    }
}
`

class CreateDelete extends Component {
  state = {
    _id: '',
  }

  render() {
    const { _id } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={_id}
            onChange={e => this.setState({ _id: e.target.value })}
            type="text"
            placeholder="A id for the category"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ _id }}>
        {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
    </div>
    )
  }
}

export default CreateDelete