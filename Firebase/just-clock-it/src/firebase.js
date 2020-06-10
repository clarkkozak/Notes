import firebase from 'firebase/app';
import 'firebase/firestore';

// Don't be a fool!
var firebaseConfig = {
  apiKey: "AIzaSyCREW6FsNodF1SD3sTUZsoVDJWQ_KCecmI",
  authDomain: "playpen-a6284.firebaseapp.com",
  databaseURL: "https://playpen-a6284.firebaseio.com",
  projectId: "playpen-a6284",
  storageBucket: "playpen-a6284.appspot.com",
  messagingSenderId: "1045121918796",
  appId: "1:1045121918796:web:c053837bd6aa87351851e9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
