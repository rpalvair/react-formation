import initialState from "./initialState"

const reducer = (state = initialState) => {
  console.log("call reducer", state)
  return state
}

export default reducer
