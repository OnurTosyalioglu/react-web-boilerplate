import { combineReducers } from 'redux'
import * as authReducer from '../reducer/auth_reducer'

const rootReducer = combineReducers({
	auth: authReducer
})

export default rootReducer
