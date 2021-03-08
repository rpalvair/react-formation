import initialState from "./initialState"
import { CLICK } from "./actions"

const reducer = (state = initialState, action) => {
  console.log("call reducer", state)
  switch (action.type) {
    case CLICK:
      return {
        ...state,
        click: state.click + 1,
      }
    default:
      return state
  }
}

export default reducer
