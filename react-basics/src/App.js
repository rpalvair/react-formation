import React, { Component, Fragment } from "react"
import "./App.css"
import Membre from "./components/Membre"

class App extends Component {
  render() {
    const { titre } = this.props
    return (
      <Fragment>
        <div class="App">
          <h1>{titre}</h1>
        </div>
        <h2>Second titre</h2>
        <Membre nom="Ruddy" />
        <Membre nom="Andy" />
        <Membre nom="Willy" />
        <Membre nom="Jessie" />
      </Fragment>
    )
  }
}

export default App
