import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Pane from '../components/Pane'
import { fetchColor } from '../actions/Footer'


const mapStateToProps = (state) => {
  return {
    name: 'footer',
    height: '120px',
    color: state.footer.color,
    isUpdating: state.footer.isUpdating
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    changeColor: fetchColor
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Pane)
