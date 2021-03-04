import React, { Component } from "react"

class AjouterRecette extends Component {
  initialState = {
    nom: "",
    image: "",
    ingredients: "",
    instructions: "",
  }

  state = this.initialState

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("submit")
    const recette = { ...this.state }
    console.log("recette", recette)
    this.props.ajouterRecette(recette)
    this.setState(() => this.initialState)
  }

  render() {
    return (
      <div className="card">
        <form
          className="admin-form ajouter-recette"
          onSubmit={this.handleSubmit}
        >
          <input
            value={this.state.nom}
            name="nom"
            type="text"
            placeholder="Nom de la recette"
            onChange={this.handleChange}
          ></input>
          <input
            value={this.state.image}
            name="image"
            type="text"
            placeholder="Nom de l'image"
            onChange={this.handleChange}
          ></input>
          <textarea
            value={this.state.ingredients}
            name="ingredients"
            rows="3"
            placeholder="Liste des ingrédients"
            onChange={this.handleChange}
          ></textarea>
          <textarea
            value={this.state.instructions}
            name="instructions"
            rows="15"
            placeholder="Liste des instructions"
            onChange={this.handleChange}
          ></textarea>
          <button type="submit">Ajouter une recette</button>
        </form>
      </div>
    )
  }
}

export default AjouterRecette
