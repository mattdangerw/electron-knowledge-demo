import { connect } from 'react-redux'
import TopBar from '../components/topbar'

const mapDispatchToProps = (dispatch) => {
  return {
    onHomeClick: () => {
      dispatch({
        type: 'HOME_CLICKED'
      })
    }
  }
}

const AppTopBar = connect(
  null,
  mapDispatchToProps
)(TopBar)

export default AppTopBar
