import { database } from '../Firebase'
import {
  GET_CALLOUTS,
  GET_USER_DATA,
  SET_USER_ID,
  SET_CHATID,
  GET_CHAT_HISTORY,
  CLEAR_CHAT_HISTORY,
  GET_USER_CHAT_LIST
} from './types'

export const getCallouts = () => dispatch => {
  database.ref('callouts/').on('value', data => {
    let calloutList = []
    data.forEach(callout => {
      calloutList.push(callout.val())
    })
    dispatch({
      type: GET_CALLOUTS,
      payload: calloutList
    })
  })
}

export const getUserData = userid => dispatch => {
  database.ref('users/' + userid).on('value', data => {
    let user = {
      username: data.val().username,
      userid: data.val().userId
    }
    dispatch({ type: GET_USER_DATA, payload: user })
  })
}

export const getUserChatlist = userid => dispatch => {
  database.ref('users/' + userid + '/chatlist/').on('value', data => {
    let chatList = []

    data.forEach(chat => {
      chatList.push(chat.val())
    })
    dispatch({ type: GET_USER_CHAT_LIST, payload: chatList })
  })
}

export const getChatHistory = chatid => dispatch => {
  database.ref('chats/' + chatid).on('value', data => {
    let chatList = []
    data.forEach(message => {
      chatList.push(message.val())
    })
    dispatch({ type: GET_CHAT_HISTORY, payload: chatList })
    dispatch({ type: SET_CHATID, payload: chatid })
  })
}

export const createNewChat = (chatid, users) => {
  database.ref('chats/' + chatid + '/').set({
    users: users
  })
}

export const addToChatHistory = (chatid, messageid, message) => {
  database.ref('chats/' + chatid + '/' + messageid).set({
    messageid: messageid,
    time: message.time,
    timestamp: message.timestamp,
    userid: message.userid,
    message: message.message
  })
}

export const clearChatHistory = () => dispatch => {
  dispatch({
    type: CLEAR_CHAT_HISTORY,
    payload: []
  })
}

export const deleteChat = chatid => {
  database.ref('chats/' + chatid).remove()
}

/*export const removeChatidFromUserdata = (userid, chatid) => {
  database.ref('users/' + userid + '/chatlist/' + chatid).remove()
}*/

export const addChatidToUserdata = (userid, chatid) => {
  database.ref('users/' + userid + '/chatlist/' + chatid).set({
    chatid: chatid,
    userid: userid
  })
}

export const createUser = user => dispatch => {
  database.ref('users/' + user.userid).set({
    userId: user.userid,
    username: user.username,
    chatlist: user.chatlist
  })
  dispatch({
    type: SET_USER_ID,
    payload: user.id
  })
}

export const sendCallout = (calloutID, callout) => {
  database.ref('callouts/' + calloutID).set({
    calloutid: callout.calloutid,
    category: callout.category,
    userid: callout.userid,
    message: callout.message,
    time: callout.time,
    timestamp: callout.timestamp
  })
}

export const removeCallout = calloutID => {
  database.ref('callouts/' + calloutID).remove()
}
