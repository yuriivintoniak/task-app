import React, { useState } from 'react'
import { TASKS, statuses } from './utils/place/data-tasks.js'
import TaskColumn from './components/TaskColumn.jsx'

const App = () => {
  const [tasks, setTasks] = useState(TASKS)

  const removeTask = (id) => {
    setTasks([...tasks].filter((task) => task.id !== id));
  }

  return (
    <div className='flex divide-x'>
      {statuses.map((status) => (
        <TaskColumn 
          key={status} 
          status={status} 
          tasks={tasks}
          setTasks={setTasks}
          removeTask={removeTask} 
        />
      ))}
    </div>
  )
}

export default App
