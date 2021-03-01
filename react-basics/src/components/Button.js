import React from "react"
import "./Button.css"

const Button = ({ vieillir, number }) => {
  return <button onClick={vieillir}>Vieillir de {number} ans</button>
}

export default Button
