import { Component } from "react"

class Formulaire extends Component {
  state = {
    message: "",
  }

  createMessage = () => {
    const { addMessage, pseudo } = this.props
    const message = {
      pseudo,
      message: this.state.message,
    }
    console.log(message)
    addMessage(message)
    this.setState({
      message: "",
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.createMessage()
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    })
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
          required
          maxLength="140"
        ></textarea>
        <div className="info">140</div>
        <button type="submit">Envoyer!</button>
      </form>
    )
  }
}

export default Formulaire
