import initialState from "./initialState"
import {
  CLICK,
  FETCH_POKEMON_PENDING,
  FETCH_POKEMON_SUCCESS,
  SHOW_POKEMON,
  CATCH_POKEMON,
} from "./actions"

const reducer = (state = initialState, action) => {
  console.log("call reducer", state)
  switch (action.type) {
    case CLICK:
      return {
        ...state,
        click: state.click + 1,
      }
    case FETCH_POKEMON_SUCCESS:
      console.log("update pokemons", action.pokemons)
      return {
        ...state,
        pokemons: action.pokemons,
        pending: false,
      }
    case FETCH_POKEMON_PENDING:
      console.log("pending")
      return {
        ...state,
        pending: true,
      }
    case SHOW_POKEMON:
      console.log("show pokemon", action.onScreen)
      return {
        ...state,
        onScreen: action.onScreen,
      }
    case CATCH_POKEMON:
      console.log("catch pokemon", action.random)
      return {
        ...state,
        pokemons: state.pokemons.map((pokemon) => {
          if (pokemon.id === state.onScreen.id) {
            const rate = pokemon.captureRate + action.random
            console.log("rate ", rate)
            if (rate >= 255) {
              console.log("pokemon caught!!!", pokemon.name)
              return {
                ...pokemon,
                isCatch: true,
                img:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png",
              }
            }
          }
          return pokemon
        }),
      }
    default:
      return state
  }
}

export default reducer
