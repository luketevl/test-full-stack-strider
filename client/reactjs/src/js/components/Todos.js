import React from 'react';

import Todo from './Todo';

import * as TodoActions from "../actions/TodoActions";

export default class Todos extends React.Component{
  constructor(){
    super();
    this.state = {
      todos: TodoStore.get()
    };
    this._createTodo = this._createTodo.bind(this);
  }
  _getTodos(){
    return this.state.todos.map(todo => <Todo key={todo._id} {...todo} />);
  }
  _createTodos(){
    TodoActions.createTodo();
  }
  componentWillMount(){
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.get(),
      })
    })
  }
componentWillUnMount(){

}

  render(){
    let todosComponents = this._getTodos();
    return(
      <div>
        <ul class="demo-list-control mdl-list">
          {todosComponents}
        </ul>
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick={this._createTodo}>
          <i class="material-icons">add</i>
        </button>
      </div>
    );
  }
}
