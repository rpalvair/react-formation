import "./App.css"
import React from "react"
import GameBoy from "./components/GameBoy"
import PokeList from "./components/PokeList"
import { connect } from "react-redux"

const App = ({ click }) => (
  <div className="App">
    {click}
    <GameBoy />
    <PokeList />
  </div>
)

const mapStateToProps = ({ click }) => {
  return {
    click,
  }
}

export default connect(mapStateToProps)(App)
