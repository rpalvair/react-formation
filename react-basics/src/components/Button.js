import React from "react"

const Button = ({ vieillir, number }) => {
  return <button onClick={vieillir}>Vieillir de {number} ans</button>
}

export default Button
