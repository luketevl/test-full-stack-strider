import React from 'react';

import Todo from './Todo';

import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <ul class="demo-list-control mdl-list">
          <Todo />
        </ul>
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">add</i>
        </button>
      </div>
    );
  }
}
