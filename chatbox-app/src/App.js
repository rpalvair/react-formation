import { Component } from "react"
import "./App.css"
import Formulaire from "./components/Formulaire"

class App extends Component {
  render() {
    return (
      <div className="box">
        <div>
          <div className="messages">Message</div>
        </div>
        <Formulaire></Formulaire>
      </div>
    )
  }
}

export default App
