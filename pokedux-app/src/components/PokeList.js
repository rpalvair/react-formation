import React from "react"
import PokemonItem from "./PokemonItem"
import { connect } from "react-redux"

const PokeList = ({ click, pokemons }) => (
  <div className="list-container">
    <h2>Try : {click}</h2>
    <div>{pokemons.map(pokemon => <div key={pokemon.id}>{pokemon.name}</div>)}</div>
    <h2>Pokedex</h2>
    <ul>
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
    </ul>
  </div>
)

const mapStateToProps = ({ click, pokemons }) => {
  return {
    click,
    pokemons
  }
}

export default connect(mapStateToProps)(PokeList)