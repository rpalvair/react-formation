import React, { Component } from "react"
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

  handleClick = () => {
    console.log("click")
  }

  render() {
    const { titre } = this.props
    const { famille } = this.state
    return (
      <div className="App">
        <h1>{titre}</h1>
        <Membre nom={famille.membre1.nom} />
        <Membre nom={famille.membre2.nom} />
        <Membre nom={famille.membre3.nom} />
        <Membre nom={famille.membre4.nom}>Je suis la plus grande</Membre>
        <button onClick={this.handleClick}>Vieillir</button>
      </div>
    )
  }
}

export default App
