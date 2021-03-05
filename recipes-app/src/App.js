import React, { Component } from "react"
import "./App.css"
import Admin from "./components/Admin"
import Header from "./components/Header"
import recettes from "./recettes"
import Card from "./components/Card"
import base from "./base"
import withFirebase from "./hoc/withFirebase"
class App extends Component {
  render() {
    const recettes = { ...this.props.recettes }
    const list = Object.keys(recettes).map((key) => {
      return <Card key={key} details={recettes[key]}></Card>
    })

    return (
      <div className="box">
        <Header pseudo={this.props.pseudo}></Header>
        <div className="cards">{list}</div>
        <Admin
          recettes={this.props.recettes}
          ajouterRecette={this.props.ajouterRecette}
          modifierRecette={this.props.modifierRecette}
          chargerExemple={this.props.chargerExemple}
          supprimerRecette={this.props.supprimerRecette}
          pseudo={this.props.pseudo}
        ></Admin>
      </div>
    )
  }
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
