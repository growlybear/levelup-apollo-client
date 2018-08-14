import React, { Component } from 'react'

class PostForm extends Component {

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
    const { onSubmit } = this.props
    const { title, body } = this.state
    return (
      <form onSubmit={ e => {
        e.preventDefault()
        // NOTE note the inclusion of variables here now that
        // we've extracted this form into a separate component
        onSubmit({
          variables: {
            title,
            body
          }
        })
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
    )
  }
}

export default PostForm
