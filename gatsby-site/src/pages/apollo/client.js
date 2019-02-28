import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
mutation PostMutation($name: String!) {
  createCategory( name: $name ){
    _id
    name
  }
}
`



class CreateLink extends Component {
  state = {
    description: '',
    url: '',
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="A name for the category"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ name }}>
        {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
    </div>
    )
  }
}

export default CreateLink