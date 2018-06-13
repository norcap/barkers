import Actions from '../actions'

export default (state, action) => {
  switch (action.type) {
    case Actions.ADD_CALLOUT:
      console.log('ADD_CALLOUT')
      return { ...state, callOuts: [...state.callOuts, action.payload] }
    case Actions.DELETE_CALLOUT:
      console.log('DELETE_CALLOUT')
      return
    case Actions.ADD_TO_HISTORY:
      console.log('ADD_TO_HISTORY')
      return
    default:
      return state
  }
}
