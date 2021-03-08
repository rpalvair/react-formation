import "./App.css"
import React from "react"
import GameBoy from "./components/GameBoy"
import PokeList from "./components/PokeList"
import { connect } from "react-redux"
import { CLICK } from "./store/actions"

const App = ({ handleClick }) => (
  <div className="App">
    <button onClick={() => handleClick()}>click</button>
    <GameBoy />
    <PokeList />
  </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch({ type: CLICK }),
  }
}

export default connect(null, mapDispatchToProps)(App)
