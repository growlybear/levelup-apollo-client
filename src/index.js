import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

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

client.query({ query }).then(res => console.log(res.data.posts))

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
