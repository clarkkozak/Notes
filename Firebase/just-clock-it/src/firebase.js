import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBRErdSOysTgPpueIxZ7Bje9JP3jSDenYE",
  authDomain: "just-clock-it-9da02.firebaseapp.com",
  databaseURL: "https://just-clock-it-9da02.firebaseio.com",
  projectId: "just-clock-it-9da02",
  storageBucket: "just-clock-it-9da02.appspot.com",
  messagingSenderId: "273380250028",
  appId: "1:273380250028:web:f4c5858328c36acbc2ea09",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
