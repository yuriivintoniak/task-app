import React from 'react'
import { v4 as uuidv44 } from 'uuid'
import TaskCard from './TaskCard'
import TaskForm from './TaskForm'

const TaskColumn = ({ status, tasks, setTasks, removeTask }) => {
  const addTask = (title) => {
    const newTask = {
      id: uuidv44(),
      status: status,
      title: title,
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <h2 className='text-3xl p-2 capitalize font-bold text-gray-500'>
        {status}
      </h2>
      {tasks.filter((task) => (task.status === status)).map((task) => (
        <TaskCard 
          key={task.id} 
          task={task} 
          removeTask={removeTask} 
        />
      ))}
      <TaskForm addTask={addTask} /> 
    </div>
  )
}

export default TaskColumn
