import React, { useState } from 'react';
import { Tabs, Checkbox, Button } from 'antd';
import { ImBin } from "react-icons/im";
import '../App.css'

const ToDoTabs = ({ tasks, onToggleComplete, onDeleteTask }) => {
    const [selectedTasks, setSelectedTasks] = useState([]);

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'All Tasks',
            children: <div className="task-list">
                {tasks.map(task => (
                    <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`} >
                        <div>
                            <Checkbox checked={task.completed} onChange={() => onToggleComplete(task.id)} />
                            <span className="task-text">{task.task}</span>
                        </div>
                        <Button type="link" onClick={() => handleDeleteTask(task.id)}><ImBin /></Button>
                    </div>
                ))}
            </div>,
        },
        {
            key: '2',
            label: 'Active',
            children: <div className="task-list">
                {tasks.filter(task => !task.completed).map(task => (
                    <div key={task.id} className="task">
                        <div> <Checkbox checked={task.completed} onChange={() => onToggleComplete(task.id)} />
                            <span className="task-text">{task.task}</span></div>
                        <Button type="link" onClick={() => handleDeleteTask(task.id)}><ImBin /></Button>
                    </div>
                ))}
            </div>,
        },
        {
            key: '3',
            label: 'Completed',
            children: <div className="task-list">
                {tasks.filter(task => task.completed).map(task => (
                    <div key={task.id} className="task completed">
                        <div><Checkbox checked={task.completed} onChange={() => onToggleComplete(task.id)} />
                            <span className="task-text">{task.task}</span></div>
                        <Button type="link" onClick={() => handleDeleteTask(task.id)}><ImBin /></Button>
                    </div>
                ))}
            </div>,
        },
    ];

    const handleDeleteTask = (taskId) => {
        onDeleteTask(taskId);
        setSelectedTasks(selectedTasks.filter(id => id !== taskId));
    };

    return (
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} centered style={{ paddingTop: 30 }} />
        </>

    );
};


export default ToDoTabs;