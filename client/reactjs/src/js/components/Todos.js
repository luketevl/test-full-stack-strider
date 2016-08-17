import React from 'react';

import Todo from './Todo';
import * as TodoApi from "../api/TodoAPI";

import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component{
  constructor(){
    super();
    this.state = {
      todos: []
    };
    TodoApi.get();
    this.createTodo = this.createTodo.bind(this);
  }
  _getTodos(){
    return this.state.todos.map(todo => <Todo key={todo._id} {...todo} />);
  }
  createTodo(){
    TodoActions.createTodo();
  }
  componentWillMount(){
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.get(),
      })
    });
  }

  render(){
    let todosComponents = this._getTodos();
    return(
      <section>
        <ul>
          {todosComponents}
        </ul>
        <button onClick={this.createTodo}>
          <i className="material-icons">add</i>
        </button>
      </section>
    );
  }
}
