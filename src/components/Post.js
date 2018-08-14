import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const POST_QUERY = gql`
  query getPost($id: ID!) {
    post (where: { id: $id }) {
      title
      body
      id
      status
      createdAt
    }
  }
`

class Post extends Component {
  render() {
    const { match } = this.props
    return (
      <Query
        query={POST_QUERY}
        variables={{
          id: match.params.id
        }}
      >
        {({ loading, data }) => {
          if (loading) return <div>Loading...</div>
          const { post } = data
          return (
            <div>
              <h1>{ post.title }</h1>
              <p>{ post.body }</p>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Post
