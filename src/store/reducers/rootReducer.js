import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commentsReducer from './commentsReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    comment: commentsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;