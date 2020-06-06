import React, { useState } from "react";

import firebase from "../firebase";

function AddTimeForm() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a title");
      return;
    }

    if (!time) {
      alert("Please add a time");
      return;
    }

    firebase
      .firestore()
      .collection("times")
      .add({
        title,
        time_seconds: parseInt(time),
      })
      .then(() => {
        setTitle("");
        setTime("");
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <h4>Add Time Entry</h4>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time">Time</label>
        <input
          id="time"
          type="number"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </div>
      <button>Add Time Entry</button>
    </form>
  );
}

export default AddTimeForm;
