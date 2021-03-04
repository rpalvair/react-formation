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


  componentDidMount = () => {
    firebaseApp
    .auth()
    .onAuthStateChanged(user => {
        if(user) {
            console.log("user",user)
            this.handleAuth({user})
        }
    })
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

    //FIXME: only at user creation
    // if (!box.owner) {
    //   await base.post(`${this.props.pseudo}/owner`, {
    //     data: authData.user.uid,
    //   })
    // }

    this.setState({
      connectedUid: authData.user.uid,
      ownerUid: box.owner,
    })
  }

  logout = async () => {
    await firebaseApp.auth().signOut()
    this.setState({
      connectedUid: null,
    })
  }

  render() {
    const {
      recettes,
      ajouterRecette,
      modifierRecette,
      chargerExemple,
      supprimerRecette,
    } = this.props

    const logout = <button onClick={this.logout}>Déconnexion</button>

    if (!this.state.connectedUid) {
      return <Login authenticate={this.authenticate} />
    }

    if (this.state.connectedUid !== this.state.ownerUid) {
      return (
        <div>
          <p> Tu n'es pas le chef de cette boîte!</p>
          {logout}
        </div>
      )
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
          {logout}
          <button onClick={chargerExemple}>Remplir</button>
        </footer>
      </div>
    )
  }
}

export default Admin
