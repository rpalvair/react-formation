import { Component } from "react"
import "./App.css"
import Formulaire from "./components/Formulaire"
import Message from "./components/Message"

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  addMessage = (message) => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({
      messages
    })
  }

  render() {
    return (
      <div className="box">
        <div>
          <Message></Message>
        </div>
        <Formulaire pseudo={this.state.pseudo} addMessage={this.addMessage}></Formulaire>
      </div>
    )
  }
}

export default App
