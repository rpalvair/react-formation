import "./App.css"
import React from "react"
import GameBoy from "./components/GameBoy"
import PokeList from "./components/PokeList"
import { connect } from "react-redux"
import { CLICK } from "./store/actions"
import Counter from "./components/Counter"

const App = ({ handleClick }) => (
  <div className="App">
    <button onClick={() => handleClick()}>click</button>
    <Counter/>
    <GameBoy />
    <PokeList />
  </div>
)

const mapStateToProps = ({ click }) => {
  return {
    click,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch({ type: CLICK }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
