import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Pane from '../components/Pane'
import { fetchColor } from '../actions/Head'


const mapStateToProps = (state) => {
  return {
    name: 'head',
    height: '150px',
    color: state.head.color,
    isUpdating: state.head.isUpdating
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    changeColor: fetchColor
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Pane)
