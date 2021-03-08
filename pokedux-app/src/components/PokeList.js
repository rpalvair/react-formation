import React from "react"
import PokemonItem from "./PokemonItem"
import { connect } from "react-redux"

const PokeList = ({ click, pokemons }) => (
  <div className="list-container">
    <h2>Try : {click}</h2>
    <h2>
      {pokemons.filter((pokemon) => pokemon.isCatch).length} / {pokemons.length}
    </h2>
    <ul>
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  </div>
)

const mapStateToProps = ({ click, pokemons }) => {
  return {
    click,
    pokemons,
  }
}

export default connect(mapStateToProps)(PokeList)
