import React, { useState } from 'react';
import { Input, Button } from 'antd';
import '../App.css'

const AddToDo = ({ onAddTask }) => {
    const [inputTask, setInputTask] = useState('');
  
    const handleAddTask = () => {
      if (inputTask.trim() !== '') {
        onAddTask(inputTask);
        setInputTask('');
      }
    };

    return (
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <Input
          placeholder="Add Details"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          onPressEnter={handleAddTask}
          style={{ width: '100%', marginRight: '10px' }}
        />
        <Button type="primary" onClick={handleAddTask}>Add</Button>
      </div>
    );
  };
  
export default AddToDo;