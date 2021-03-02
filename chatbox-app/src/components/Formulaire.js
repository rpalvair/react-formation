import { Component } from "react"

class Formulaire extends Component {
  state = {
    message: "",
    length: this.props.length,
  }

  createMessage = () => {
    const { addMessage, pseudo, length } = this.props
    const message = {
      pseudo,
      message: this.state.message,
    }
    console.log(message)
    addMessage(message)
    this.setState({
      message: "",
      length
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.createMessage()
  }

  handleChange = (event) => {
    const value = event.target.value
    this.setState({
      message: value,
      length: this.props.length - value.length,
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
        <div className="info">{this.state.length}</div>
        <button type="submit">Envoyer!</button>
      </form>
    )
  }
}

export default Formulaire
