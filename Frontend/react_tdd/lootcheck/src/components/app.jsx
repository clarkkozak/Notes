import React, { Component } from 'react'
import Wallet from './wallet'

export class App extends Component {
  render() {
    return (
      <div>
        <h2>Loot Check</h2>
        <hr />
        <Wallet />
      </div>
    )
  }
}

export default App
