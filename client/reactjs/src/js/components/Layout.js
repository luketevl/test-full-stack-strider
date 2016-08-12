import React from 'react';

import Todos from './Todos';

export default class Layout extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">TODO LIST</span>
          </div>
        </header>
        <main class="mdl-layout__content">
          <div class="page-content">
            <Todos />
          </div>
        </main>
      </div>
    );
  }
}
