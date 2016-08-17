import React from 'react';
import * as TodoActions from "../actions/TodoActions";

export default class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state          = {... this.props};
    this.handleRemove   = this.handleRemove.bind(this);
    this._onChange      = this._onChange.bind(this);
    this._onChangeCheck = this._onChangeCheck.bind(this);
  }
  handleRemove(evt){
    TodoActions.deleteTodo(this.props);
  }
  _onChange(evt){
    this.setState({
      name: evt.target.value
    });
  }
  _onChangeCheck(evt){
    console.log();
    this.setState({
      checked: !this.state.checked
    });
  }
  render(){
    const { checked, name, img, _id} = this.state;
    let opts_input      = [];
    let opts_checkbox   = [];
    if(checked){
      opts_input = {
        readOnly: true
      };
      opts_checkbox = {
        checked
      };
    }
    return (
      <li>
        <span>
          <i className="material-icons">person</i>
          <input className="" type="text" value={name} focus="focused" {...opts_input} onChange={this._onChange}/>
        </span>
        <span>
          <label>
            <input type="checkbox" {...opts_checkbox} onChange={this._onChangeCheck}/>
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
