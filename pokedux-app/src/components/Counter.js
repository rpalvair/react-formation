import React from "react"
import { connect } from "react-redux"

const Counter = ({ click }) => {
  return <div>Compteur : {click}</div>
}

const mapStateToProps = ({ click }) => {
  return {
    click,
  }
}

export default connect(mapStateToProps)(Counter)
