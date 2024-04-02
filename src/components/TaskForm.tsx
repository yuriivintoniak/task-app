import React, { useState } from 'react';

const TaskForm = ({ setListTask }) => {
  const [title, setTitle] = useState('');

  const addTask = (title) => {
    setListTask(prev => [
      {
        id: prev.length + 1, 
        title: title
      },
      ...prev
    ]);
    setTitle('');
  }

  // const handleChange = (e) => {
  //   setInput(e.currentTarget.value);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addTask(input);
  //   setInput('');
  // }

  return (
    <div className='flex items-center justify-between mt-10 mb-4 
      px-5 py-3 rounded-2xl border-gray-500 border-2 w-56 h-10 mx-auto'>
      <input 
        type="text"
        value={title} 
        placeholder='Add a task' 
        onChange={e => setTitle(e.target.value)} 
        onKeyDown={e => e.key === 'Enter' && addTask(title)}
        className='bg-transparent w-full border-none outline-none'
      />
    </div>

    // <form onSubmit={handleSubmit}>
    //   <input 
    //     type='text'
    //     value={input}
    //     onChange={handleChange}
    //     placeholder='Enter task...'
    //   />
    //   <button>Add Task</button>
    // </form>
  );
};

export default TaskForm;
