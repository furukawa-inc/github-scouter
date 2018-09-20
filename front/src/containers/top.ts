import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as TopModule from '../modules/top'
import Top from '../components/top'

interface Top {
    inputValue:  string;
    combatPower: number;
}

const mapStateToProps = (state: any): object => {
    console.log(typeof state.top);
    console.log(state);
    return {
        top: state.top
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        ...bindActionCreators(TopModule, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Top)
