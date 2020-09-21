import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { getFirebase } from "react-redux-firebase";

const store = createStore(
	rootReducers,
	compose(
		applyMiddleware(
			logger,
			thunk.withExtraArgument({
				getFirebase,
			})
		)
	)
);
export default store;
