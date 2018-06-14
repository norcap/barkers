import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCu2SjX2X8tZgwXyYEdQOjy8VKGCFQM5N8',
  authDomain: 'mag-messenger.firebaseapp.com',
  databaseURL: 'https://mag-messenger.firebaseio.com',
  projectId: 'mag-messenger',
  storageBucket: '',
  messagingSenderId: '303315501474'
}

firebase.initializeApp(config)

const database = firebase.database()

function sendChatMessage(chatID, messageID, userID, date, timestamp, message) {
  database.ref('chats/' + chatID).set({
    id: messageID,
    userid: userID,
    date: date,
    timestamp: timestamp,
    message: message
  })
}

function receiveChatMessage(chatID) {
  database
    .ref('chats/' + chatID)
    .once('value')
    .then(messages => {
      messages.forEach(key => {
        console.log(key.val().message)
        console.log(key.val().user)
      })
    })
}

function sendCallout() {
  database.ref('callouts/').set({
    id: messageID,
    userid: userID,
    date: date,
    timestamp: timestamp,
    message: message
  })
}

function receiveCallout() {
  database
    .ref('callouts/')
    .once('value')
    .then(message => {
      message.forEach(key => {
        console.log(key.val().message)
      })
    })
}
/*
let users = database
  .ref('users/')
  .once('value')
  .then(user => {
    user.forEach(item => {
      console.log(item.val().username)
    })
  })
*/
export { receiveChatMessage, sendChatMessage, sendCallout, receiveCallout }
