import React, { Component } from "react"

class AdminForm extends Component {
  handleChange = (event, key) => {
    const { name, value } = event.target
    const recette = this.props.recettes[key]
    recette[name] = value
    this.props.modifierRecette(key, recette)
  }

  render() {
    const { id: key, recettes } = this.props
    const recette = recettes[key]
    return (
      <div className="card">
        <form className="admin-form">
          <input
            value={recette.nom}
            onChange={(e) => this.handleChange(e, key)}
            type="text"
            name="nom"
            placeholder="Nom de la recette"
          />
          <input
            value={recette.image}
            onChange={(e) => this.handleChange(e, key)}
            type="text"
            name="image"
            placeholder="Nom de l'image'"
          />
          <textarea
            value={recette.ingredients}
            onChange={(e) => this.handleChange(e, key)}
            type="text"
            name="ingredients"
            rows="3"
            placeholder="Liste des ingédients"
          />
          <textarea
            value={recette.instructions}
            onChange={(e) => this.handleChange(e, key)}
            type="text"
            name="nom"
            rows="15"
            placeholder="Liste des instructions"
          />
        </form>
        <button onClick={() => this.props.supprimerRecette(key)}>
          Supprimer
        </button>
      </div>
    )
  }
}

export default AdminForm
