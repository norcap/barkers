import { connect } from 'react-redux'
import { deleteCallOut } from '../actions'
import ChatList from '../components/Chats/ChatList'

const mapStateToProps = state => ({
  callOuts: state.callOuts,
  chatHistory: state.chatHistory
})

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(deleteCallOut())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatList)
