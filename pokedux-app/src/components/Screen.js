import React from "react"
import { connect } from "react-redux"

const Screen = ({ onScreen }) => {
  if (onScreen.id) {
    return <h1>{onScreen.name}</h1>
  }
  return (
    <>
      <div className="screen-logo">GAME BOY</div>
      <div className="screen-logo-shadow">GAME BOY</div>
      <div className="nintendo-logo-screen">Nintendo&reg;</div>
    </>
  )
}

const mapStateToProps = ({ onScreen }) => {
  return {
    onScreen,
  }
}

export default connect(mapStateToProps)(Screen)
