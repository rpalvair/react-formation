import React, { Component } from "react"
import "./App.css"
import Button from "./components/Button"
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
    const famille = { ...this.state.famille }
    famille.membre1.age += 1
    this.setState({
      famille,
    })
  }

  render() {
    const { titre } = this.props
    const { famille } = this.state
    return (
      <div className="App">
        <h1>{titre}</h1>
        <Membre age={famille.membre1.age} nom={famille.membre1.nom} />
        <Membre age={famille.membre2.age} nom={famille.membre2.nom} />
        <Membre age={famille.membre3.age} nom={famille.membre3.nom} />
        <Membre age={famille.membre4.age} nom={famille.membre4.nom}>
          Je suis la plus grande
        </Membre>
        <Button vieillir={this.handleClick}></Button>
      </div>
    )
  }
}

export default App
