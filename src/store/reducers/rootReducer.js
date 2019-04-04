import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    comment: commentsReducer
})

export default rootReducer;