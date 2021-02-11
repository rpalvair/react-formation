import React, { Component } from "react"
import "./App.css"

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <h1>React App</h1>
      // </div>
      React.createElement(
        "div",
        { className: "App" },
        React.createElement("h1", null, "React App")
      )
    )
  }
}

export default App
