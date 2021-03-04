import React, { Component } from "react"

class Login extends Component {
  render() {
    const { authenticate } = this.props
    return (
      <div className="login">
        <h2>Connecte toi pour créer tes recettes!</h2>
        <button onClick={authenticate} className="facebook-button">
          Me connecter avec Facebook
        </button>
      </div>
    )
  }
}

export default Login
