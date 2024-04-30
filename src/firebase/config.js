import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArZI_ftaWSvSWSvl7b-g-JQp1f6Bifkn8",
  authDomain: "vue-blog-app-262ca.firebaseapp.com",
  projectId: "vue-blog-app-262ca",
  storageBucket: "vue-blog-app-262ca.appspot.com",
  messagingSenderId: "504561842822",
  appId: "1:504561842822:web:9b11401775d41c0baa6f07"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
