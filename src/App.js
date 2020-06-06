import React from "react";
import "./styles.css";
import TodoItem from './TodoItem.js';
import todoitems from './todoitems.js'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos : todoitems
    }

    this.handlecheck = this.handlecheck.bind(this)
  }

  handlecheck(id) {
   console.log(id)
    this.setState(prevState => {
      const updatetodos = prevState.todos.map(todo => {
        if(todo.id === id){todo.checked = !todo.checked}
        
        return todo
      })
      return {todos :updatetodos}       
    } 
    )
   
  }

  render () {
    const listtodos = this.state.todos.map(item =>
       <TodoItem key={item.id} item={item} handlecheck={this.handlecheck} />
       )

    return (
      
      <div className="App">
        <h1>LIST TO DO </h1>
        <h2>THIS IS THE FIRST EXERCICE</h2>
        {listtodos}
      </div>
    );
    }
}

export default App ;
