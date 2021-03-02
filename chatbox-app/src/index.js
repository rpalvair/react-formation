import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Connexion from "./components/Connexion"
import NotFound from "./components/NotFound"
import reportWebVitals from "./reportWebVitals"

import { BrowserRouter, Route, Switch } from "react-router-dom"

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"  component={Connexion}></Route>
      <Route  component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
