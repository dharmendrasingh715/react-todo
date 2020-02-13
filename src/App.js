import React from 'react';
import "./App.css"

import AddTodo from "./components/AddTodo/AddTodo";
import Filter from "./components/Filter/Filter";
import Loader from "./components/Loader/Loader";
import Todos from "./components/Todos/Todos";

class App extends React.Component {
	state = {
		todos: [],
		filter: null
	}

	todoClickHandler = (event) => {
		event.preventDefault();
		const newTodos = this.state.todos.map( (todo) => {
			if(todo.id === +event.currentTarget.dataset.index) {
				const newTodo = {...todo} 
				if(todo.status === "active") {
					newTodo.status = "completed";
				} else {
					newTodo.status = "active";
				}
				return newTodo
			} 
			return todo;
		});

		this.setState({
			todos: newTodos
		})
	}

	getTodos (filter) {
		if (this.state.todos.length > 0) {
			let todoList;

			switch (filter) {
				case "active-todos":
					todoList = this.state.todos.filter((todo) => {
						return todo.status === "active";
					})
					break;

				case "completed-todos":
					todoList = this.state.todos.filter((todo) => {
						return todo.status === "completed";
					})
					break;
			
				default:
					todoList = this.state.todos
					break;
			}
			if(todoList.length > 0) {
				return <Todos todos={todoList} todoClickHandler={this.todoClickHandler} />;
			}
			return <Loader />;
		} 
		return <Loader />;
	}

	addTodoHandler = (event) => {
		event.preventDefault();
		const form = event.target;
		if(form.elements[0].value) {
			const newIndex = this.state.todos.length > 0 ? (this.state.todos[this.state.todos.length -1].id) + 1 : 1;

			const newTodo = {
				todo: form.elements[0].value,
				status: "active",
				id: newIndex
			};

			this.setState({
				todos: [...this.state.todos, newTodo]
			})

			form.elements[0].value = "";
		}
		
	}

	clearCompletedTodos = () => {
		const newTodos = this.state.todos.filter( (todo) => {
			return todo.status === "active"
		});

		this.setState({
			todos: newTodos,
			filter: null
		});
	}

	filterClickHandler = (event) => {
		event.preventDefault();
		const clickedFilter = event.target;
		switch (clickedFilter.dataset["key"]) {
			case "all-todos":
				this.setState({
					filter: null
				})
				break;

			case "active-todos":
				this.setState({
					filter: "active-todos"
				})
				break;

			case "completed-todos":
				this.setState({
					filter: "completed-todos"
				})
				break;

			case "clear-todos":
				this.clearCompletedTodos();
				break;
		
			default:
				break;
		}
	}

	getStatus = (status) => {
		return this.state.todos.filter( (todo) => {
			return todo.status === status
		}).length;
	}

	render () {
		return (
			<div className="ui container App">
				<h1 className="ui center aligned very huge padded text header">react todo</h1>
				<div className="ui segments">
					<AddTodo addTodoHandler={this.addTodoHandler}/>
					<div className="ui center aligned segment">
						<Filter filterHandler={this.filterClickHandler}/>
						<h4 className="ui horizontal divider header">Todos</h4>
						{
							this.getTodos(this.state.filter)
						}
					</div>
					<div className="ui secondary segment">
						Active: {this.getStatus("active")} | Completed: {this.getStatus("completed")}
					</div>
				</div>
			</div>
		)
	}
}
export default App;
