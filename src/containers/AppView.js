import { connect } from 'react-redux'
import { deleteCallOut, addCallOut, addToHistory } from '../actions'
import App from '../App'

const mapStateToProps = state => ({
  callOuts: state.callOuts,
  chatHistory: state.chatHistory
})

const mapDispatchToProps = dispatch => ({
  deleteCallOut: () => {
    dispatch(deleteCallOut())
  },
  addCallOut: newCallOut => {
    dispatch(addCallOut(newCallOut))
  },
  addToHistory: () => {
    dispatch(addToHistory())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
