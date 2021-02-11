import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQ3UtyGTSpTkzTsrypK7_QpHfgGP1wF1o",
    authDomain: "blossoms-warehouse.firebaseapp.com",
    projectId: "blossoms-warehouse",
    storageBucket: "blossoms-warehouse.appspot.com",
    messagingSenderId: "987477294240",
    appId: "1:987477294240:web:f7fac63522046bdf7c9dc5",
    measurementId: "G-WSBQPP1TE4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

