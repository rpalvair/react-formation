import React, { Fragment } from "react"

const Membre = ({ nom, age, children }) => {
  return (
    <Fragment>
      <h2 style={{ backgroundColor: age < 30 ? "purple" : "yellow", color: "white" }}>
        {nom.toUpperCase()}: {age} ans
      </h2>
      {children ? <p>{children}</p> : <Fragment />}
    </Fragment>
  )
}

export default Membre
