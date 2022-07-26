import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const initalState={};

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware()))

export default store