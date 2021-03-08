export const CLICK = "CLICK"
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS"
export const FETCH_POKEMON_PENDING = "FETCH_POKEMON_PENDING"
export const SHOW_POKEMON = "SHOW_POKEMON"

export const fetch_pokemon_success = (pokemons) => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemons,
})

export const fetch_pokemon_pending = (pokemons) => ({
  type: FETCH_POKEMON_PENDING,
})

export const show_pokemon_action = (pokemons) => ({
  type: SHOW_POKEMON,
  onScreen: pokemons[Math.floor(Math.random() * 10)],
})
