import React from 'react';
import * as TodoActions from "../actions/TodoActions";

export default class Todo extends React.Component{
  constructor(props){
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(evt){
    console.log(this.props);
    console.log('aaaaaaaaaa');
    TodoActions.deleteTodo(this.props);
  }
  render(){
    const { checked, name, img, _id} = this.props;
    let checkedText = '';
    let readonly = '';
    if(checked){
      checkedText = 'checked';
      readonly = 'readonly';
    }
    return (
      <li className="mdl-list__item">
        <span className="mdl-list__item-primary-content">
          <i className="material-icons  mdl-list__item-avatar">person</i>
          <div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet">
            <input className="mdl-textfield__input" type="text" value={name} focus="focused" readOnly={readonly} />
            <label className="mdl-textfield__label" for="name">Todo name...</label>
          </div>
        </span>
        <span className="mdl-list__item-secondary-action">
          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
            <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" />
            <button className="mdl-button mdl-js-button mdl-button--icon">
              <i className="material-icons">photo</i>
            </button>
            <button className="mdl-button mdl-js-button mdl-button--icon" onClick={this.handleRemove}>
              <i className="material-icons">delete</i>
            </button>
          </label>
        </span>
      </li>
    );
  }
}
