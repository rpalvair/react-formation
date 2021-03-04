import React, { Component } from "react"
import AjouterRecette from "./AjouterRecette"
import AdminForm from "./AdminForm"
import firebase from "firebase/app"
import "firebase/auth"
import base, { firebaseApp } from "../base"
import Login from "./Login"

class Admin extends Component {
  state = {
    connectedUid: null,
    ownerUid: null,
  }

  authenticate = () => {
    firebaseApp
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(this.handleAuth)
  }

  handleAuth = async (authData) => {
    console.log("authData", authData)
    const box = await base.fetch(this.props.pseudo, { context: this })

    if (!box.owner) {
      await base.post(`${this.props.pseudo}/owner`, {
        data: authData.user.uid,
      })
    }
  }

  render() {
    const {
      recettes,
      ajouterRecette,
      modifierRecette,
      chargerExemple,
      supprimerRecette,
    } = this.props

    if (!this.state.connectedUid) {
      return <Login authenticate={this.authenticate} />
    }

    return (
      <div className="cards">
        <AjouterRecette ajouterRecette={ajouterRecette}></AjouterRecette>
        {Object.keys(recettes).map((key) => (
          <AdminForm
            key={key}
            id={key}
            modifierRecette={modifierRecette}
            supprimerRecette={supprimerRecette}
            recettes={recettes}
          ></AdminForm>
        ))}
        <footer>
          <button onClick={chargerExemple}>Remplir</button>
        </footer>
      </div>
    )
  }
}

export default Admin
