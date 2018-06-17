import { database } from '../Firebase'
import { GET_CALLOUTS } from './types'

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

export const sendCallout = (calloutID, category, userID, message) => {
  database.ref('callouts/' + calloutID).set({
    calloutID: calloutID,
    category: category,
    userid: userID,
    message: message
  })
}
