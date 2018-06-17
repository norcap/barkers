import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import CalloutReducer from './Reducers'

const rootReducer = combineReducers({
  form: formReducer,
  callouts: CalloutReducer
})

export default rootReducer
