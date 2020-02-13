import React from "react";

const Todo = (props) => {
    const todoClass = `item ${props.status}`;
    return (
        <div className={todoClass} data-index={props.index} onClick={props.todoClickHandler}>
            {
                props.status === "active"? <i className="icon square outline"></i> : <i className="icon check square outline"></i> 
            }
            <div className="content">
                <div className="description">{props.todo}</div>
            </div>
        </div>
    )
}

export default Todo;