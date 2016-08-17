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
      <li>
        <span>
          <i className="material-icons">person</i>
          <input className="" type="text" value={name} focus="focused" readOnly={readonly} />
        </span>
        <span>
          <label>
            <input type="checkbox" />
            <button>
              <i className="material-icons">photo</i>
            </button>
            <button onClick={this.handleRemove}>
              <i className="material-icons">delete</i>
            </button>
          </label>
        </span>
      </li>
    );
  }
}
