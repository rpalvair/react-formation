import { Component, createRef } from "react"
import "./App.css"
import Formulaire from "./components/Formulaire"
import Message from "./components/Message"
import base from "./base"
class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo,
  }

  messagesRef = createRef()

  componentDidMount = () => {
    base.syncState("/", {
      context: this,
      state: "messages",
    })
  }

  componentDidUpdate = () => {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = (message) => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({
      messages,
    })
  }

  render() {
    const messages = { ...this.state.messages }
    const list = Object.keys(messages).map((key) => {
      const message = messages[key]
      return (
        <Message
          key={key}
          message={message.message}
          pseudo={message.pseudo}
        ></Message>
      )
    })

    console.log(list)

    return (
      <div className="box">
        <div>
          <div className="messages" ref={this.messagesRef}>
            <div className="message">{list}</div>
          </div>
        </div>
        <Formulaire
          length={140}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}
        ></Formulaire>
      </div>
    )
  }
}

export default App
