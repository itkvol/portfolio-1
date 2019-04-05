
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBwZNWoLnZAOF9rDc7Mj00oSfUv7zUPWp4",
    authDomain: "my-portfolio-project-9df5f.firebaseapp.com",
    databaseURL: "https://my-portfolio-project-9df5f.firebaseio.com",
    projectId: "my-portfolio-project-9df5f",
    storageBucket: "my-portfolio-project-9df5f.appspot.com",
    messagingSenderId: "1002806544787"
  };

  firebase.initializeApp(config);

//   @firebase/firestore: Firestore (5.9.3): 
//   The timestampsInSnapshots setting now defaults to true and you no
//   longer need to explicitly set it. In a future release, the setting
//   will be removed entirely and so it is recommended that you remove it
//   from your firestore.settings() call now.
// ============^^^===========================^^^============
//   firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;