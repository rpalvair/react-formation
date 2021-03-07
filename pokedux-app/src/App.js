import "./App.css"
import React from "react"
import GameBoy from "./components/GameBoy"
import PokeList from "./components/PokeList"

const App = () => (
  <div className="App">
    <GameBoy />
    <PokeList />
  </div>
)

export default App
