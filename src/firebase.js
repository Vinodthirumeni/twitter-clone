import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCokfm14UArPC-YzA_yZH2Xd5dgYwBTnqQ",
  authDomain: "twitter-clone-f1e09.firebaseapp.com",
  databaseURL: "https://twitter-clone-f1e09.firebaseio.com",
  projectId: "twitter-clone-f1e09",
  storageBucket: "twitter-clone-f1e09.appspot.com",
  messagingSenderId: "77972953478",
  appId: "1:77972953478:web:d2b4b089998ae3070cb407",
  measurementId: "G-53KFKV3BL2",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

// If firebase expired
// https://console.firebase.google.com/u/0/project/twitter-clone-f1e09/firestore/rules
