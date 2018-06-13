import { createAction } from 'redux-actions'

const Actions = {
  ADD_CALLOUT: 'ADD_CALLOUT',
  DELETE_CALLOUT: 'DELETE_CALLOUT',
  ADD_TO_HISTORY: 'ADD_TO_HISTORY'
}

export default Actions

export const addCallOut = createAction(Actions.ADD_CALLOUT)
export const deleteCallOut = createAction(Actions.DELETE_CALLOUT)
export const addToHistory = createAction(Actions.ADD_TO_HISTORY)
