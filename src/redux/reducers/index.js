import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import ReviewReducer from "./reviewReducer";
import authReducer from "./authReducer";

const rootReducers = combineReducers({
	reviewState: ReviewReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	auth: authReducer,
});
export default rootReducers;
