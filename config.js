import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDb7PuAUJLCDsMQ4HuuwXTiPTo_MfV67es",
    authDomain: "pro-c71-e4f63.firebaseapp.com",
    projectId: "pro-c71-e4f63",
    storageBucket: "pro-c71-e4f63.appspot.com",
    messagingSenderId: "91397834959",
    appId: "1:91397834959:web:f86091c0336c50e9e20fba"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
