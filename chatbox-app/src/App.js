import { Component, createRef } from "react"
import "./App.css"
import "./animations.css"
import Formulaire from "./components/Formulaire"
import Message from "./components/Message"
import base from "./base"
import { CSSTransition, TransitionGroup } from "react-transition-group"
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
    Object.keys(messages)
      .slice(0, -10)
      .forEach((key) => (messages[key] = null))
    this.setState({
      messages,
    })
  }

  isSameUser = (message) => {
    return message.pseudo === this.state.pseudo
  }

  render() {
    const messages = { ...this.state.messages }
    const list = Object.keys(messages).map((key) => {
      const message = messages[key]
      return (
        <CSSTransition timeout={200} classNames="fade" key={key}>
          <Message
            message={message.message}
            pseudo={message.pseudo}
            sameUser={this.isSameUser(message)}
          ></Message>
        </CSSTransition>
      )
    })

    console.log(list)

    return (
      <div className="box">
        <div>
          <div className="messages" ref={this.messagesRef}>
            <TransitionGroup className="message">{list}</TransitionGroup>
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
