import React, { useState } from 'react'
import { TASKS, statuses } from './utils/place/data-tasks.js'
// import TaskColumn from './components/TaskColumn.jsx'
import ColumnForm from './components/ColumnForm.jsx'
import TaskCard from './components/TaskCard.jsx'

const columns = statuses.map((status) => {
  const tasksInColumns = TASKS.filter((task) => task.status === status)
  return {
    status: status,
    tasks: tasksInColumns,
  }
})

console.log(columns.tasks)

const Home = () => {
  const [tasks, setTasks] = useState()
  // const [listColumns, setListColumns] = useState(columns)

  // const addColumn = (columnStatus) => {
  //   const newColumn = {
  //     status: columnStatus,
  //     tasks: [],
  //   }
  //   setListColumns([...listColumns, newColumn])
  // }

  const removeTask = (id) => {
    setTasks([...tasks].filter((task) => task.id !== id));
  }

  return (
    <div className='flex divide-x'>

      {columns.map((column) => (
        <div key={column.status}>
          <h2 className='text-3xl p-2 capitalize font-bold text-gray-500'>
            {column.status}
          </h2>
          {column.tasks.map((task) => (
            <TaskCard
              key={task.id} 
              task={task}
              removeTask={removeTask} 
            />
          ))}
          {/* <TaskForm addTask={addTask} /> */}
        </div>
      ))}

      {/* <ColumnForm addColumn={addColumn} /> */}

      {/* {statuses.map((status) => (
        <TaskColumn 
          key={status} 
          status={status} 
          tasks={tasks}
          setTasks={setTasks}
          removeTask={removeTask} 
        />
      ))}
      <ColumnForm addColumn={addColumn} /> */}

    </div>
  )
}

export default Home
