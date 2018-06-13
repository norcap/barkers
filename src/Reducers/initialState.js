import uid from 'uid'

export default {
  users: [],
  chats: [],
  callouts: [
    {
      id: uid(10),
      message:
        'This is a test message with no real content. To delete a message just click on the message.',
      category: 'introduction'
    }
  ],
  chatHistory: []
}
