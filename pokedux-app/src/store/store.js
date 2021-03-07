import { createStore } from "redux"
import reducer from "./reducer"
import initialState from "./initialState"
import { Provider } from "react-redux"
import React from "react"

const store = createStore(reducer, initialState)

export default (props) => <Provider store={store} {...props} />
