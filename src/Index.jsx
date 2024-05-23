import React, { useState } from 'react';

function Index() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="text-3xl font-bold mb-4">TODO List</header>
      <div className="w-full max-w-md">
        <div className="flex mb-4">
          <input 
            type="text" 
            className="flex-grow p-2 border border-gray-300 rounded-l" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Add a new task" 
          />
          <button 
            className="p-2 bg-blue-500 text-white rounded-r" 
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul className="bg-white shadow rounded p-4">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  className="mr-2" 
                  checked={task.completed} 
                  onChange={() => toggleTaskCompletion(index)} 
                />
                <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
              </div>
              <button 
                className="text-red-500" 
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Index;