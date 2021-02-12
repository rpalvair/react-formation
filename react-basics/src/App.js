import React, { Component, Fragment } from "react"
import "./App.css"
import Membre from "./components/Membre"

class App extends Component {
  render() {
    return (
      <Fragment>
        <div class="App">
          <h1>React App</h1>
        </div>
        <h2>Second titre</h2>
        <Membre />
      </Fragment>
    )
  }
}

export default App
