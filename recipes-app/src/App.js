import React, { Component } from "react"
import "./App.css"
import Admin from "./components/Admin"
import Header from "./components/Header"
import recettes from "./recettes"
import Card from "./components/Card"
import base from "./base"
class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {},
  }

  componentDidMount = () => {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: "recettes",
    })
  }

  componentWillUnmount = () => {
    base.removeBinding(this.ref)
  }

  chargerExemple = () => {
    this.setState({
      recettes,
    })
  }

  ajouterRecette = (recette) => {
    console.log("recette a ajouter", recette)
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({
      recettes,
    })
  }

  modifierRecette = (key, recette) => {
    console.log("recette a modifier", key, recette)
    const recettes = { ...this.state.recettes }
    recettes[key] = recette
    this.setState({
      recettes,
    })
  }

  supprimerRecette = (key) => {
    console.log("recette a supprimer", key)
    const recettes = { ...this.state.recettes }
    recettes[key] = null
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
        <Admin
          recettes={this.state.recettes}
          ajouterRecette={this.ajouterRecette}
          modifierRecette={this.modifierRecette}
          chargerExemple={this.chargerExemple}
          supprimerRecette={this.supprimerRecette}
          pseudo={this.state.pseudo}
        ></Admin>
      </div>
    )
  }
}

export default App
