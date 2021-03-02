import React, { Component, Fragment } from "react"
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

  getDescription = (membre) => {
    if (this.state.show && membre === "membre4") {
      return "Je suis la plus grande"
    }
    return null
  }

  getButton = (membre) => {
    if (membre === "membre4") {
      return (
        <button onClick={this.handleShowDescription}>
          {this.state.show ? "Cacher" : "Montrer"}
        </button>
      )
    }
    return null
  }

  cacherNom = (id) => {
    const famille = { ...this.state.famille }
    famille[id].nom = "X"
    this.setState({
      famille,
    })
  }

  changerNom = (id, event) => {
    const famille = { ...this.state.famille }
    famille[id].nom = event.target.value
    this.setState({
      famille,
    })
  }

  render() {
    const { titre } = this.props
    const { famille, number } = this.state
    const liste = Object.keys(famille).map((membre) => (
      <Membre
        key={membre}
        changerNom={(e) => this.changerNom(membre, e)}
        cacherNom={() => this.cacherNom(membre)}
        age={famille[membre].age}
        nom={famille[membre].nom}
      >
        {membre === "membre4" ? (
          <Fragment>
            {this.state.show ? "Je suis la plus grande" : null}
            <button onClick={this.handleShowDescription}>
              {this.state.show ? "Cacher" : "Montrer"}
            </button>
          </Fragment>
        ) : null}
        {/*
        {this.getDescription(membre)}
        {this.getButton(membre)}
          */}
      </Membre>
    ))

    console.log(liste)

    return (
      <div className="App">
        <h1>{titre}</h1>
        <input value={number} onChange={this.handleChange} type="text"></input>
        {liste}
        <Button
          number={number}
          vieillir={() => this.handleClick(number)}
        ></Button>
      </div>
    )
  }
}

export default App
