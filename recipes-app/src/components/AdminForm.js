import React, { Component } from "react"

class AdminForm extends Component {
  render() {
    return (
      <div className="card">
        <form className="admin-form">
          <input type="text" name="nom" placeholder="Nom de la recette" />
          <input type="text" name="image" placeholder="Nom de l'image'" />
          <textarea
            type="text"
            name="ingredients"
            rows="3"
            placeholder="Liste des ingédients"
          />
          <textarea
            type="text"
            name="nom"
            rows="15"
            placeholder="Liste des instructions"
          />
        </form>
        <button>Supprimer</button>
      </div>
    )
  }
}

export default AdminForm
