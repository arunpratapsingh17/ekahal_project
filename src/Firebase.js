// import * as firebase from "firebase/app";
// import "firebase/auth";
import firebase from "firebase"
const app = firebase.initializeApp({
    apiKey: "AIzaSyASMrZ1zC9nLQ3w8wAtT6O2s8nU3pV-6c8",
    authDomain: "ekahal-41762.firebaseapp.com",
    projectId: "ekahal-41762",
    storageBucket: "ekahal-41762.appspot.com",
    messagingSenderId: "793392796990",
    appId: "1:793392796990:web:fc0027ee7da0329136c86f",
    measurementId: "G-GN4Q7B0B07"
});
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default app;
