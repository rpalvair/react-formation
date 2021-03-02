import React, { Fragment } from "react"

const Membre = ({ nom, age, cacherNom, children }) => {
  return (
    <Fragment>
      <h2 style={{ backgroundColor: age < 30 ? "purple" : "yellow", color: "white" }}>
        {nom.toUpperCase()}: {age} ans
      </h2>
      <button onClick={cacherNom} style={{margin: "5px"}}>X</button>
      {children ? <p>{children}</p> : <Fragment />}
    </Fragment>
  )
}

export default Membre
