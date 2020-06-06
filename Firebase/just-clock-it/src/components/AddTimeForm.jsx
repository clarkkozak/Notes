import React from 'react'

function AddTimeForm() {

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <h4>Add Time Entry</h4>      
      <div>
        <label htmlFor="title">Title</label>
        <input type="text"/>
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input type="number"/>
      </div>
      <button>Add Time Entry</button>
    </form>
  )
}

export default AddTimeForm
