import React from "react";
import ReviewRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import fb from "./config/firebase";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { isLoaded } from "react-redux-firebase";
const rrfConfig = { userProfile: "users" };
const rrfProps = {
	firebase: fb,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance, // <- needed if using firestore
};
function App() {
	return (
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<Router>
					<ToastContainer />
					<ReviewRoutes />
				</Router>
			</ReactReduxFirebaseProvider>
		</Provider>
	);
}

export default App;
