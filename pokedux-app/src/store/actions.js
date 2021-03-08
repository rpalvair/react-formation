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

export const show_pokemon_action = (pokemons) => {
  const pokemonsFree = pokemons.filter((pok) => !pok.isCatch)
  const onScreen = pokemonsFree[Math.floor(Math.random() * pokemonsFree.length)]
  return (dispatch) => {
    dispatch({ type: SHOW_POKEMON, onScreen })
  }
}
