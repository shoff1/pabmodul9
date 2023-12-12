import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyAoSZLnE-Qfq80nPQ6W81oNUet6LMkAYbg",
  authDomain: "noteapplication-f4253.firebaseapp.com",
  databaseURL: "https://noteapplication-f4253-default-rtdb.firebaseio.com",
  projectId: "noteapplication-f4253",
  storageBucket: "noteapplication-f4253.appspot.com",
  messagingSenderId: "287395904613",
  appId: "1:287395904613:web:711cae6970c5ea929d5a8c"
  });

const FIREBASE = firebase;

export default FIREBASE;