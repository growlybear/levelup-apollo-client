import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Post from './components/Post'
import Posts from './components/Posts'
import NewPost from './components/NewPost'

import logo from './logo.svg'
import './App.css'

const client = new ApolloClient({
  uri: 'https://api-apeast.graphcms.com/v1/cjksvdr8u017601burwjyriqm/master'
})

// NOTE just to test out a query ...
// client.query({ query: ALL_POSTS_QUERY }).then(res => console.log(res.data.posts))

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Link to="/">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
          </Link>

          <Link to="/post/new">New Post</Link>

          <Switch>
            <Route path="/" component={Posts} exact />
            <Route path="/post/new" component={NewPost} exact />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
