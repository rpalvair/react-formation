import React from "react"
import { connect } from "react-redux"
import fetchPokemons from "../store/fetchPokemons"

const Screen = ({ onScreen, pokemons }) => {
  if (onScreen.id) {
    if (pokemons[onScreen.id - 1].isCatch) {
      return (
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"></img>
      )
    }
    return (
      <>
        <h3>{onScreen.name}</h3>
        <img alt={onScreen.name} src={onScreen.img} />
      </>
    )
  }
  return (
    <>
      <div className="screen-logo">GAME BOY</div>
      <div className="screen-logo-shadow">GAME BOY</div>
      <div className="nintendo-logo-screen">Nintendo&reg;</div>
    </>
  )
}

const mapStateToProps = ({ onScreen, pokemons }) => {
  return {
    onScreen,
    pokemons,
  }
}

export default connect(mapStateToProps)(Screen)
