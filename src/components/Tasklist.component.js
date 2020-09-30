import React from 'react'
import Task from './Task.component'


const TaskList = ( tasks ) =>{
    console.log(tasks)
    return(
        <div className="task-containter">
            <ul className="task-list">
            {tasks.map(task => (
                <Task text={task.text} id={task.id} />
            ))}
            </ul>
        </div>
    );
}
export default TaskList