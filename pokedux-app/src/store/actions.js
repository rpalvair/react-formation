export const CLICK = "CLICK"
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS"

export const fetch_pokemon_success = (pokemons) => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemons,
})
