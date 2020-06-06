import React, { useEffect, useState } from "react";
import firebase from '../firebase'

function useTimes() {
  const [times, setTimes] = useState([])


  useEffect(() => {
    firebase
      .firestore()
      .collection('times')
      .onSnapshot(snapshot => {
        const newTimes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setTimes(newTimes)
      })    
  }, [])

  return times
}

function TimesList() {
  const times = useTimes()

  return (
    <div>
      <div>
        <h2>Times List</h2>
        <label htmlFor="selectFilter">Sort By:</label>{" "}
        <select name="selectFilter" id="selectFiler">
          <option value="ascending">Times (Fastest First)</option>
          <option value="">Time (Slowest First)</option>
          <option value="">disabled ===</option>
          <option value="">Title (A-Z)</option>
          <option value="">Title (Z-A)</option>
        </select>
      </div>
      <ol>
        {times.map(time => (
          <li key={time.id}>
          <div className="time-entry">
            <span>{time.title}</span>
            <code className="time">{time.time_seconds}</code>
          </div>
        </li>
        ))}
      </ol>
    </div>
  );
}

export default TimesList;
