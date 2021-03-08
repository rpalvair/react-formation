import initialState from "./initialState"
import { CLICK, FETCH_POKEMON_PENDING, FETCH_POKEMON_SUCCESS } from "./actions"

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
        pending: false
      }
    case FETCH_POKEMON_PENDING:
      console.log("pending")
      return {
        ...state,
        pending: true,
      }
    default:
      return state
  }
}

export default reducer
