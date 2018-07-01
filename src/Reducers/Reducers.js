import {
  GET_CALLOUTS,
  GET_USER_DATA,
  SET_USER_ID,
  SET_CHATID,
  GET_CHAT_HISTORY,
  CLEAR_CHAT_HISTORY,
  GET_USER_CHAT_LIST
} from '../Actions/types'

export default (state, action) => {
  switch (action.type) {
    case GET_CALLOUTS:
      return { ...state, callouts: action.payload }
    case GET_USER_DATA:
      return { ...state, userdata: action.payload }
    case GET_USER_CHAT_LIST:
      return { ...state, chatlist: action.payload }
    case SET_USER_ID:
      return { ...state, userId: action.payload }
    case SET_CHATID:
      return { ...state, chatid: action.payload }
    case GET_CHAT_HISTORY:
      return { ...state, chatHistory: action.payload }
    case CLEAR_CHAT_HISTORY:
      return { ...state, chatHistory: action.payload }
    default:
      return state
  }
}
