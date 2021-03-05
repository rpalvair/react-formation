import React, { Component } from "react"

const ColorContext = React.createContext()

class ColorProvider extends Component {
  //no need to use a state
  //   state = {
  //     color: "seagreen",
  //   }
  render() {
    return (
      <ColorContext.Provider value={{ color: "seagreen" }}>
        {this.props.children}
      </ColorContext.Provider>
    )
  }
}

export { ColorContext }

export default ColorProvider
