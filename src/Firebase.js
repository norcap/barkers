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

export const database = firebase.database()
