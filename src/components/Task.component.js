import React from 'react'

const Task = ({ text }) => {
    return(
<div className="task">
    <li className="task-item">{text}</li>
    <button className="complete-btn">
        <i className="fas fa-check"></i>
        Complete</button>
    <button className="trash-btn">
        <i className="fas fa-trash"></i>
        Trash</button>
</div>
    );
}

export default Task;