import React from 'react';
import * as TodoActions from "../actions/TodoActions";
import * as TodoApi from "../api/TodoAPI";

export default class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state          = {... this.props};
    this._handleRemove   = this._handleRemove.bind(this);
    this._onChange      = this._onChange.bind(this);
    this._onChangeCheck = this._onChangeCheck.bind(this);
    this._handleUpload = this._handleUpload.bind(this);
    this.intervalKeyup  = '';
  }
  _handleRemove(){
    console.log(this.props);
    TodoApi.deleteTodo(this.props);
  }
  _eventTimer(todo){
    if(this.intervalKeyup!=""){
      clearTimeout(this.intervalKeyup);
    }
    this.intervalKeyup = setTimeout(function(){
      this.intervalKeyup ="";
      if(todo.name){
        console.log(todo);
        TodoApi.saveTodo(todo);
      }
    }, 800);
  }
  _onChange(evt){
    this.setState({
      name: evt.target.value
    });
    console.log(evt.target);
    const todo = this.state;
    this._eventTimer(todo);
    console.log(this.state);
  }

  _onChangeCheck(evt){
    console.log(evt.target);
    this.setState({
      checked: evt.target.checked
    });
    const todo = this.state;
    this._eventTimer(todo);
    console.log(this.state);
  }
  _handleUpload(evt){
    let files = evt.target.files;
    var formData = new FormData();
    if(files){
      console.log(files);
         const todo = this.state;
         todo.files = {};

         for (let key in files) {
           if (files.hasOwnProperty(key) && files[key] instanceof File) {
             formData.append('files', {file: files[key]});
             console.log("Key");
             console.log(key);
             console.log("files key");
             console.log(files[key]);
             console.log("Formdata");
             console.log(formData);
           }
         }
         for (var p of formData) {
  console.log(p);
}
         todo.files = formData;
         TodoApi.saveTodo(todo);
    }

  }
  render(){
    const { checked, name, img, _id} = this.state;
    let opts_input      = [];
    let opts_checkbox   = [];
    let toggle_display = [];
    if(_id === undefined){
      toggle_display = {
        display: 'none'
      }
    }
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
          <img src={img} alt={name} />
          <input className="" type="text" value={name} focus="focused" {...opts_input} onChange={this._onChange}/>
        <span>
          <label style={toggle_display}>
            <input type="checkbox" {...opts_checkbox} onChange={this._onChangeCheck}/>
            <button className="upload">
            <form encType='multipart/form-data'>
              <input type="file" onChange={this._handleUpload} />
            </form>
              <i className="material-icons">photo</i>
            </button>
            <button onClick={this._handleRemove}>
              <i className="material-icons">delete</i>
            </button>
          </label>
        </span>
      </li>
    );
  }
}
