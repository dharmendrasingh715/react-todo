import React from "react";
import Todo from "../Todo/Todo";


const Todos = (props) => {
    return (
        <div className="ui left aligned huge divided list">
            {
                props.todos.map( (todo, i) => <Todo status={todo.status} index={todo.id} key={i} todo={todo.todo} todoClickHandler={props.todoClickHandler} />)
            }
        </div>
    );
}


export default Todos;