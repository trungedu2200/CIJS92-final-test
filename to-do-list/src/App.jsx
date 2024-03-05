import React, { useState, useEffect } from 'react';
import AddToDo from './components/AddToDo';
import ToDoTabs from './components/ToDoTabs';
import { Button } from 'antd';
import './App.css';
import { ImBin } from "react-icons/im";


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const handleAddTask = (task) => {
    const newTask = { id: Date.now(), task, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleBulkDelete = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: 'center' }}>#ToDoList</h1>
      <AddToDo onAddTask={handleAddTask}/>
      <ToDoTabs
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
      />
      {tasks.length > 0 && (<div style={{ direction: 'rtl' }} >
        <Button type="danger" onClick={handleBulkDelete} style={{ marginTop: '20px', color: 'white', background: '#d30606', fontWeight: 'bold', }}>
          Delete All <ImBin />
        </Button>
      </div>

      )}

    </div>
  );
};

export default App
