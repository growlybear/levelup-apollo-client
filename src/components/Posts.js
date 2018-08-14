import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const ALL_POSTS_QUERY = gql`
  query allPosts {
    posts {
      title
      body
      id
      status
      createdAt
    }
  }
`

class Posts extends Component {
  render() {
    return (
      <Query query={ALL_POSTS_QUERY}>
        {({ loading, data }) => {
          if (loading) return <div>Loading...</div>
          const { posts } = data
          return posts.map(post => (
            <Link to={`/post/${post.id}`} key={ post.id }>
              <h1>{ post.title }</h1>
            </Link>
          ))
        }}
      </Query>
    )
  }
}

export default Posts
