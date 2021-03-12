import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCn8pmq1ghWY8eOqtpPch-W2aRAQ7mN3w8",
    authDomain: "cleanandgreen-65573.firebaseapp.com",
    projectId: "cleanandgreen-65573",
    storageBucket: "cleanandgreen-65573.appspot.com",
    messagingSenderId: "502940204265",
    appId: "1:502940204265:web:f96345008716c003ce8478"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();