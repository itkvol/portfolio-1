import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commentsReducer from './commentsReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    comment: commentsReducer,
    firestore: firestoreReducer
})

export default rootReducer;