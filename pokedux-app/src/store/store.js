import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import initialState from "./initialState"
import { Provider } from "react-redux"
import React from "react"
import thunk from "redux-thunk"

const store = createStore(reducer, initialState, applyMiddleware(thunk))

export default (props) => <Provider store={store} {...props} />
