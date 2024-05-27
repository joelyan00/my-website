
// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
      apiKey: "AIzaSyB_CHReK9pAaEg0axIiKLL0bcY2OYrzWZk",
      authDomain: "samecrub.firebaseapp.com",
      projectId: "samecrub",
      storageBucket: "samecrub.appspot.com",
      messagingSenderId: "171678073544",
      appId: "1:171678073544:web:9e0d09e4194f1c65369bfd",
      measurementId: "G-N5CHHPM31W"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the database for use in other files
export const database = firebase.database();
