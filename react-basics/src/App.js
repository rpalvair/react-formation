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
    number: 2,
    show: false,
  }

  handleClick = (number) => {
    const famille = { ...this.state.famille }
    famille.membre1.age += number
    this.setState({
      famille,
    })
  }

  handleChange = (event) => {
    const value = Number(event.target.value)
    this.setState({
      number: value,
    })
  }

  handleShowDescription = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  getDescription = () => {
    if (this.state.show) {
      return "Je suis la plus grande"
    }
    return null
  }

  render() {
    const { titre } = this.props
    const { famille, number, show } = this.state
    let description = this.getDescription()
    return (
      <div className="App">
        <h1>{titre}</h1>
        <input value={number} onChange={this.handleChange} type="text"></input>
        <Membre age={famille.membre1.age} nom={famille.membre1.nom} />
        <Membre age={famille.membre2.age} nom={famille.membre2.nom} />
        <Membre age={famille.membre3.age} nom={famille.membre3.nom} />
        <Membre age={famille.membre4.age} nom={famille.membre4.nom}>
          {description}
          <button onClick={this.handleShowDescription}>
            {show ? "Cacher" : "Montrer"}
          </button>
        </Membre>
        <Button
          number={number}
          vieillir={() => this.handleClick(number)}
        ></Button>
      </div>
    )
  }
}

export default App
