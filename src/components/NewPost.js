import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import PostForm from './PostForm'

const NEW_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(
      data: {
        title: $title
        body: $body
      }
    ) {
      id
      title
      body
    }
  }
`

class Post extends Component {
  render() {
    return (
      <Mutation mutation={NEW_POST}>
        { (createPost, { loading, error }) => (
          <PostForm onSubmit={createPost} />
        )}
      </Mutation>
    )
  }
}

export default Post
