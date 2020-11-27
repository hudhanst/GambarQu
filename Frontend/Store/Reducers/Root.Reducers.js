import { combineReducers } from 'redux'

import Auth from './Auth.Reducers'

const RootReducers = combineReducers({
    Auth,
})

export default RootReducers