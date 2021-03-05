import PropTypes from "prop-types"
import React, { Component } from "react"
import "./App.css"
import Admin from "./components/Admin"
import Card from "./components/Card"
import Header from "./components/Header"
import withFirebase from "./hoc/withFirebase"
import ColorProvider from "./components/Color"
class App extends Component {
  render() {
    const recettes = { ...this.props.recettes }
    const list = Object.keys(recettes).map((key) => {
      return <Card key={key} details={recettes[key]}></Card>
    })

    return (
      <div className="box">
        <ColorProvider>
          <Header pseudo={this.props.pseudo}></Header>
        </ColorProvider>
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

App.propTypes = {
  recettes: PropTypes.object.isRequired,
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
