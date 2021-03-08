import initialState from "./initialState"
import {
  CLICK,
  FETCH_POKEMON_PENDING,
  FETCH_POKEMON_SUCCESS,
  SHOW_POKEMON,
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
    default:
      return state
  }
}

export default reducer
