import React from "react";
import "./App.css";

import TimesList from "./components/TimesList";
import AddTimeForm from "./components/AddTimeForm";

// Proof of concept

// import firebase from "./firebase";
// firebase.firestore().collection("times").add({
//   title: "Cook",
//   time_seconds: 45,
// });

function App() {
  return (
    <div className="App">
      <h1>Just Clock It</h1>
      <TimesList />
      <AddTimeForm />
    </div>
  );
}

export default App;
