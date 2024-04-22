import React, { useState } from 'react'
import { TASKS, statuses } from './utils/place/data-tasks.js'
import TaskColumn from './components/TaskColumn.jsx'
import ColumnForm from './components/ColumnForm.jsx'

const App = () => {
  const [columns, setColumns] = useState(statuses)
  const [tasks, setTasks] = useState(TASKS)
  
  console.log(columns)

  const addColumn = (newColumn) => {
    setColumns([...columns, newColumn])
  }

  const removeTask = (id) => {
    setTasks([...tasks].filter((task) => task.id !== id));
  }

  return (
    <div className='flex divide-x'>
      {columns.map((column) => (
        <TaskColumn 
          key={column} 
          status={column} 
          tasks={tasks}
          setTasks={setTasks}
          removeTask={removeTask} 
        />
      ))}
      <ColumnForm addColumn={addColumn} />
    </div>
  )
}

export default App
