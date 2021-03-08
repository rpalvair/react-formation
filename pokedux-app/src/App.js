import "./App.css"
import React, { useEffect } from "react"
import GameBoy from "./components/GameBoy"
import PokeList from "./components/PokeList"
import { connect } from "react-redux"
import {
  CLICK,
  show_pokemon_action,
  catch_pokemon_action,
} from "./store/actions"
import fetchPokemons from "./store/fetchPokemons"
import "./styles.css"
import Loader from "./components/Loader"

const App = ({
  handleClick,
  fetchPokemons,
  pending,
  show_pokemon_action,
  pokemons,
  catch_pokemon_action,
}) => {
  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  if (pending) {
    return <Loader></Loader>
  }

  return (
    <div className="App">
      <GameBoy
        showPokemon={() => show_pokemon_action(pokemons)}
        catchPokemon={catch_pokemon_action}
      />
      <PokeList />
    </div>
  )
}

const mapStateToProps = ({ pending, pokemons }) => {
  return {
    pending,
    pokemons,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),
    handleClick: () => dispatch({ type: CLICK }),
    show_pokemon_action: (pokemons) => dispatch(show_pokemon_action(pokemons)),
    catch_pokemon_action: () => dispatch(catch_pokemon_action()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
