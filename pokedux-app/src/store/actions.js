export const CLICK = "CLICK"
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS"
export const FETCH_POKEMON_PENDING = "FETCH_POKEMON_PENDING"

export const fetch_pokemon_success = (pokemons) => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemons,
})

export const fetch_pokemon_pending = (pokemons) => ({
    type: FETCH_POKEMON_PENDING
  })
  