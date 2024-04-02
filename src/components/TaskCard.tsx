import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className='border rounded-lg px-2 m-2 bg-gray-50 w-64 h-20'>
      <h1 className='text-base font-base py-2'>
        {task.title}
      </h1>
    </div>
  );
}

export default TaskCard;
