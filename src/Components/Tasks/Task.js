import React from 'react';
import '../../App.css';

const Task= (props)=> {
    console.log (props);
    return (
        <div>
            <li className = {props.task.completed ? "completed" : ""} >
                {props.task.id}
                {props.task.task}
                {/* onClick= {()=> {console.log("delete", props.task.id)}} */}
                <button onClick= {()=> {props.onDeleteTask(props.task.id)}}> Delete Task</button>
                <button onClick= {()=> {props.onCompleteTask(props.task.id)}}> Task Completed</button>
            </li>
        </div>
    )
}



export default Task;



