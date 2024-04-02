import React, { useState } from 'react';
import TaskCard from './components/TaskCard.tsx';
import TaskForm from './components/TaskForm.tsx';
import { TASKS, statuses } from './utils/data-tasks.ts';

const columns = statuses.map((status) => {
  const tasksInColumns = TASKS.filter((task) => task.status === status);
  return {
    status: status,
    tasks: tasksInColumns
  }
});

const App = () => {
  const [listTask, setListTask] = useState(columns);

  // const columns = statuses.map((status) => {
  //   const tasksInColumns = TASKS.filter((task) => task.status === status);
  //   return {
  //     status: status,
  //     tasks: tasksInColumns
  //   }
  // });

  return (
    <div className='flex divide-x'>
      {columns.map((column) => (
        <div>
          <h2 className='text-3xl p-2 capitalize font-bold text-gray-500'>
            {column.status}
          </h2>
          {column.tasks.map((task) => <TaskCard key={task.id} task={task} />)}
          <TaskForm setListTask={setListTask} />
        </div>
      ))}
    </div>
  );
}

export default App;
