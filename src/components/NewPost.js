import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

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
  state = {
    title: '',
    body: ''
  }

  handleInput = e => {
    const formData = {}
    formData[e.target.name] = e.target.value
    this.setState({ ...formData })
  }

  render() {
    const { title, body } = this.state
    return (
      <Mutation
        mutation={NEW_POST}
        variables={{
          title,
          body
        }}
      >
        { (createPost, { loading, error }) => (
          <form onSubmit={(e) => {
            e.preventDefault()
            createPost()
              .then(() => {
                this.setState({
                  title: '',
                  body: ''
                })
              })
              .catch(e => console.log(e))
          }}>
            <input type="text" name="title" value={title} onChange={this.handleInput} placeholder="title" />
            <textarea type="text" name="body" value={body} onChange={this.handleInput} placeholder="body" />
            <button>Create Post</button>
          </form>
        )}
      </Mutation>
    )
  }
}

export default Post
