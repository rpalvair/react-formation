import { fetch_pokemon_pending, fetch_pokemon_success } from "./actions"

const numberOfPokemons = 10

const urls = []

for (let i = 1; i <= numberOfPokemons; i++) {
  urls.push(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
}

console.log("urls", urls)

const requests = urls.map((url) => fetch(url))

console.log("requests", requests)

function responsesToJsonPromise(responses) {
  return responses.map((res) => {
    console.log("res", res)
    return res.json()
  })
}

function buildPokemon(pokemon) {
  return {
    id: pokemon.id,
    name: pokemon.name,
    captureRate: pokemon.capture_rate,
    isCatch: false,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
  }
}

export default () => {
  return (dispath) => {
    dispath(fetch_pokemon_pending())
    Promise.all(requests)
      .then((responses) => {
        console.log("responses", responses)
        return Promise.all(responsesToJsonPromise(responses))
        // return responses.map((res) => {
        //   console.log("res", res)
        //   return new Promise((resolve, reject) => {
        //     console.log("resolve")
        //     resolve(res.json())
        //   })
        // })
      })
      .then((pokemons) => {
        console.log("pokemons", pokemons)
        //return Promise.all(promises).then((pokemons) => {
        return pokemons.map((pokemon) => buildPokemon(pokemon))
        //})
      })
      .then((pokemons) => dispath(fetch_pokemon_success(pokemons)))
  }
}
