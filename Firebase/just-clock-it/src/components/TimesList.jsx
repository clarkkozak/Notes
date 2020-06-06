import React, { useEffect, useState } from "react";
import firebase from '../firebase'

const SORT_OPTIONS = {
  'TIME_ASC': { column: 'time_seconds', direction: 'asc'},
  'TIME_DESC': { column: 'time_seconds', direction: 'desc'},
  'TITLE_ASC': { column: 'title', direction: 'asc'},
  'TITLE_DESC': { column: 'title', direction: 'desc'},
}

function useTimes(sortBy = 'TIME_ASC') {
  const [times, setTimes] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('times')
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot(snapshot => {
        const newTimes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setTimes(newTimes)
      })   
    
    // When the react component is unmonted, then unsubscribe from the Fire store web socket
    return () => unsubscribe()
  }, [sortBy])

  return times
}

function TimesList() {
  const [sortBy, setSortBy] = useState('TIME_ASC')
  const times = useTimes(sortBy)

  return (
    <div>
      <div>
        <h2>Times List</h2>
        <label htmlFor="selectFilter">Sort By:</label>{" "}
        <select value={sortBy} onChange={(event) => setSortBy(event.currentTarget.value)}name="selectFilter" id="selectFiler">
          <option value="TIME_ASC">Times (Fastest First)</option>
          <option value="TIME_DESC">Time (Slowest First)</option>
          <option value="">disabled ===</option>
          <option value="TITLE_ASC">Title (A-Z)</option>
          <option value="TITLE_DESC">Title (Z-A)</option>
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
