import { connect } from 'react-redux'
import { addToHistory } from '../actions'
import Chat from '../components/Chats/Chat'

const mapStateToProps = state => ({
  chatHistory: state.chatHistory
})

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(addToHistory())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
