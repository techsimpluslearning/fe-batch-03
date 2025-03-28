import React from 'react'
import './TaskBox.css'
import { constent } from '../../constent'
import Task from '../Task/Task';

const TaskBox = () => {
    const lastThreeTask = constent.lastThreeTasks();
  return (
    
    <div className='task-box'>
        
        <ul>
            {lastThreeTask.map((task)=> (
                <li>{<Task value = {task}/>}</li>
            ))}
        </ul>

       
        
    </div>
  )
}

export default TaskBox;