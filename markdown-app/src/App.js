import { Component } from "react"
import "./App.css"
import { sampleText } from "./sampleText"
import marked from "marked"

class App extends Component {
  state = {
    text: sampleText,
  }

  componentDidMount = () => {
    const text = localStorage.getItem("text")
    this.setState({
      text
    })
  }

  componentDidUpdate = () => {
    const { text } = this.state
    localStorage.setItem("text", text)
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  renderText = (text) => {
    return {
      __html: marked(text, { sanitize: true }),
    }
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
          <div className="col-sm-6">
            <div
              dangerouslySetInnerHTML={this.renderText(this.state.text)}
            ></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
