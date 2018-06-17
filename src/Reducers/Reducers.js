import { GET_CALLOUTS } from '../Actions/types'

export default (state, action) => {
  switch (action.type) {
    case GET_CALLOUTS:
      return { ...state, callouts: action.payload }
    default:
      return state
  }
}
