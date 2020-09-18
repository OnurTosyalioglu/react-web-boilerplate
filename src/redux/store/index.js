import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer/root_reducer'

const index = createStore(rootReducer, applyMiddleware(thunk))

export default index
