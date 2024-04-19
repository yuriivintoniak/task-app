import React from 'react'
import { CiCircleRemove } from "react-icons/ci"

const TaskCard = ({ task, removeTask }) => {
  return (
    <div className='flex items-center justify-between w-80 h-24 
      border rounded-lg px-2 m-2 bg-gray-50'>
      <h1 className='text-lg font-base py-1'>
        {task.title}
      </h1>
      <button onClick={() => removeTask(task.id)}>
        <CiCircleRemove size={24} />
      </button>
    </div>
  )
}

export default TaskCard
