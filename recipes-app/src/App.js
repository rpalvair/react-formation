import React, { Component } from "react"
import "./App.css"
import Admin from "./components/Admin"
import Header from "./components/Header"
import recettes from "./recettes"
import Card from "./components/Card"

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {},
  }

  chargerExemple = () => {
    this.setState({
      recettes,
    })
  }

  render() {
    const recettes = { ...this.state.recettes }
    const list = Object.keys(recettes).map((key) => {
      return <Card key={key} details={recettes[key]}></Card>
    })

    return (
      <div className="box">
        <Header pseudo={this.state.pseudo}></Header>
        <div className="cards">{list}</div>
        <Admin chargerExemple={this.chargerExemple}></Admin>
      </div>
    )
  }
}

export default App
