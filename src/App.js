import React from 'react';
import "./App.css"

import AddTodo from "./components/AddTodo/AddTodo";
import Filter from "./components/Filter/Filter";
import Loader from "./components/Loader/Loader";
import Todos from "./components/Todos/Todos";

class App extends React.Component {
	state = {
		todos: {},
		active: 0,
		completed: 0
	}

	getTodos () {
		if (this.state.todos.length > 0) {
			return <Todos todos={this.state.todos} />
		} 
		return <Loader />;
	}

	render () {
		return(
			<div className="ui container App">
				<h1 className="ui center aligned very huge padded text header">react todo</h1>
				<div className="ui segments">
					<AddTodo />
					<div className="ui center aligned segment">
						<Filter />
						<h4 className="ui horizontal divider header">Todos</h4>
						{this.getTodos()}	
					</div>	
				</div>
			</div>			
		)
	}
}

// function App() {
//   return (
//     
//           
//         </div>
//                 
//           
//           

//           <div className="ui left aligned huge divided list">
//             <div className="item">
//               <i className="icon square outline"></i>
//               <div className="content">
//                 <div className="description">An excellent polish restaurant, quick delivery and hearty, filling meals.</div>
//               </div>
//             </div>
//             <div className="item">
//               <i className="icon square outline"></i>
//               <div className="content">
//                 <div className="description">An excellent polish restaurant, quick delivery and hearty, filling meals.</div>
//               </div>
//             </div>
//           </div>  
//         </div>
//         <div className="ui secondary segment">
//           5/15
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
