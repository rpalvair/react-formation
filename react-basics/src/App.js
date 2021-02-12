import React, { Component, Fragment } from "react"
import "./App.css"
import Membre from "./components/Membre"

const famille = {
  membre1: {
    nom: "Ruddy",
    age: 35,
  },
  membre2: {
    nom: "Andy",
    age: 32,
  },
  membre3: {
    nom: "Willy",
    age: 28,
  },
  membre4: {
    nom: "Jessie",
    age: 36,
  },
}
class App extends Component {
  state = {
    famille,
  }

  render() {
    const { titre } = this.props
    return (
      <Fragment>
        <div className="App">
          <h1>{titre}</h1>
        </div>
        <h2>Second titre</h2>
        <Membre nom="Ruddy" />
        <Membre nom="Andy" />
        <Membre nom="Willy" />
        <Membre nom="Jessie">Je suis la plus grande</Membre>
      </Fragment>
    )
  }
}

export default App
