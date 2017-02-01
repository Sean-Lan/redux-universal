import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Pane from '../components/Pane'
import { fetchColor } from '../actions/Body'

const mapStateToProps = (state) => {
  return {
    name: 'body',
    height: '300px',
    color: state.body.color,
    isUpdating: state.body.isUpdating
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    changeColor: fetchColor
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Pane)
