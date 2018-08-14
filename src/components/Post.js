import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const POST_QUERY = gql`
  query getPost {
    post (where: { id: "cjksyre0226bc0995lpnnrlvz" }) {
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
    return (
      <Query query={POST_QUERY}>
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
