import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

import Top from './containers/top'

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Top />
        </div>
    </Provider>,
    document.getElementById('app')
)
