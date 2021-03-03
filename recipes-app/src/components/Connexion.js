import React, { Component } from "react"
import { Redirect } from "react-router-dom"

class Connexion extends Component {
  state = {
    pseudo: "",
    goToApp: false,
  }

  handleChange = (event) => {
    this.setState({
      pseudo: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      goToApp: true,
    })
  }

  render() {
    if (this.state.goToApp) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
    }

    return (
      <div className="connexionBox">
        <form className="connexion" onSubmit={this.handleSubmit}>
          <input
            value={this.state.pseudo}
            onChange={this.handleChange}
            placeholder="Nom du chef"
            type="text"
            pattern="[A-Za-z-]{1,}"
            required
          />
          <button type="submit">GO</button>
          <p>Pas de caractères spéciaux.</p>
        </form>
      </div>
    )
  }
}

export default Connexion
