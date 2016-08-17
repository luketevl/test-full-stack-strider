import React from 'react';

import Todos from './Todos';

export default class Layout extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <header>
          <h1>Todo List</h1>
        </header>
        <main>
          <Todos />
        </main>
      </div>
    );
  }
}
