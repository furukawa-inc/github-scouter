import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as TopModule from '../modules/Top'

const mapStateToProps = (state: any) => {
  return state.top
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(TopModule, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
