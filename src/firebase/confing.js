import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA7aEaYe3ucWe2BYpzNrzK27HVQuaGzxhA",
    authDomain: "firegram-996d7.firebaseapp.com",
    databaseURL: "https://firegram-996d7.firebaseio.com",
    projectId: "firegram-996d7",
    storageBucket: "firegram-996d7.appspot.com",
    messagingSenderId: "256454383580",
    appId: "1:256454383580:web:2691891032725bb3122119"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
