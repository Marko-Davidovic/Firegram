import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA6s2PdnDBfzAWm_1ePh0WmRbA3EvwhM4g",
    authDomain: "firegram-fbf2f.firebaseapp.com",
    databaseURL: "https://firegram-fbf2f.firebaseio.com",
    projectId: "firegram-fbf2f",
    storageBucket: "firegram-fbf2f.appspot.com",
    messagingSenderId: "508717087670",
    appId: "1:508717087670:web:bef6ad7b4e9ecf7254df17"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
