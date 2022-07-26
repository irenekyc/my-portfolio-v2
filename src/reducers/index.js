import dataReducer from './data'
import modalReducer from './modal'
import statusReducer from './userInput'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    data: dataReducer,
    modal: modalReducer,
    status: statusReducer
})

export default allReducers