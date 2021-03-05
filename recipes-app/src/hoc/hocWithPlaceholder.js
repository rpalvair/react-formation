import React, { Component } from "react"

const withPlaceholder = (WrappedComponent) =>
  class HOC extends Component {
    render() {
      return <WrappedComponent placeholder="Nom du chef"></WrappedComponent>
    }
  }

export default withPlaceholder
