import React, { useState } from 'react'
import styles from './TaskForm.module.css'

const TaskForm = ({ addTask }) => {
  const [input, setInput] = useState('')

  const onSubmitHandler = event => {
    event.preventDefault()
    addTask(input)
    setInput('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input 
          value={input} 
          placeholder='Add a task' 
          onChange={(e) => setInput(e.target.value)}     
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default TaskForm
