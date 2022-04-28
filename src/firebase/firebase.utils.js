// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVai-vhHqaw5FwgadPsrX7HtRdGkJLoAk",
  authDomain: "kellton-ecommerce-1830e.firebaseapp.com",
  projectId: "kellton-ecommerce-1830e",
  storageBucket: "kellton-ecommerce-1830e.appspot.com",
  messagingSenderId: "410149833579",
  appId: "1:410149833579:web:8e547b850b0ed27fd69a2e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth= firebase.auth()

export const fireStore= firebase.fireStore()

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase