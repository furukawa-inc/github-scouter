import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as TopModule from '../modules/top'
import Top from '../components/top'

const mapStateToProps = (state: any) => {
  return state.top
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(TopModule, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Top)
