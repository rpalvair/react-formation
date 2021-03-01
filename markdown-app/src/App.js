import { Component } from "react"
import "./App.css"
import { sampleText } from "./sampleText"

class App extends Component {
  state = {
    text: sampleText,
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    const { text } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              onChange={this.handleChange}
              value={text}
              className="form-control"
              rows="35"
            ></textarea>
          </div>
          <div className="col-sm-6">{text}</div>
        </div>
      </div>
    )
  }
}

export default App
