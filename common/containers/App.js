import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../components/App'
import { fetchColor } from '../actions'

const mapStateToProps = (state) => {
  return {
    headColor: state.headColor,
    bodyColor: state.bodyColor,
    footerColor: state.footerColor
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    headChangeColor: fetchColor('head'),
    bodyChangeColor: fetchColor('body'),
    footerChangeColor: fetchColor('footer')
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
