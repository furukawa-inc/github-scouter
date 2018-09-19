import {createStore as reduxCreateStore, applyMiddleware, combineReducers} from 'redux'
// import logger from 'redux-logger'
import TopReducer from './modules/top'

const createStore = () => {
    return reduxCreateStore(
        combineReducers({
            top: TopReducer
        }),
        applyMiddleware(
            // logger
        )
    )
}

export default createStore
