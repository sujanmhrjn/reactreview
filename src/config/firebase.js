import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";
// import "firebase/analytics";

var firebaseConfig = {
	apiKey: "AIzaSyB-UGONFcHWVIOO9hNmLinlynKbVrgHPgM",
	authDomain: "reactreviewform.firebaseapp.com",
	databaseURL: "https://reactreviewform.firebaseio.com",
	projectId: "reactreviewform",
	storageBucket: "reactreviewform.appspot.com",
	messagingSenderId: "1050821107436",
	appId: "1:1050821107436:web:4ba1c13f43b58671bb0fc9",
	measurementId: "G-95S7TCR7QB",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.firestore();

export default firebase;
