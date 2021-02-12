import React, { Fragment } from "react"

const Membre = ({ nom, children }) => {
  return (
    <Fragment>
      <h2>Membre {nom.toUpperCase()}</h2>
      <p>{children}</p>
    </Fragment>
  )
}

export default Membre
