import React, { Component } from "react"

class AjouterRecette extends Component {
  state = {
    nom: "",
    image: "",
    ingredients: "",
    instructions: "",
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className="card">
        <form className="admin-form ajouter-recette">
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
        </form>
      </div>
    )
  }
}

export default AjouterRecette
