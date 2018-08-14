import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'

import logo from './logo.svg'
import './App.css'

const client = new ApolloClient({
  uri: 'https://api-apeast.graphcms.com/v1/cjksvdr8u017601burwjyriqm/master'
})

const query = gql`
  {
    posts {
      title
      body
      id
      status
      createdAt
    }
  }
`

// NOTE just to test out a query ...
// client.query({ query }).then(res => console.log(res.data.posts))

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
