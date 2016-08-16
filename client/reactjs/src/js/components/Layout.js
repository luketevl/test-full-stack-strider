import React from 'react';

import Todos from './Todos';

export default class Layout extends React.Component{
  constructor(){
    super();
    this.teste = this.teste.bind(this);
  }
  teste(){
    console.log(9);
  }
  render(){
    return(
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">TODO LIST</span>
          </div>
        </header>
        <main className="mdl-layout__content">
          <div className="page-content">
          <Todos />
          </div>
        </main>
      </div>
    );
  }
}
