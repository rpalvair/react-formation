import React from "react"
import PokemonItem from "./PokemonItem"
import { connect } from "react-redux"

const PokeList = ({ click }) => (
  <div className="list-container">
    <h2>Try : {click}</h2>
    <h2>Pokedex</h2>
    <ul>
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
    </ul>
  </div>
)

const mapStateToProps = ({ click }) => {
  return {
    click,
  }
}

export default connect(mapStateToProps)(PokeList)
