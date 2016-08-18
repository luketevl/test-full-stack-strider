import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter{
  constructor(){
    super();
    this.handleAction = this.handleAction.bind(this);
  }

  create(){
    let todo = {
      name: '',
      img: '',
      checked: false
    };
    console.log("Method create"+this.todos);
    this.todos.push(todo);
    this.emit('change');
  }
  save(todo){
    this.todos.push(todo);
    this.emit('change');
  }
  delete(index){

    //this.emit('change');
  }
  setAll(todos){
    this.todos = todos;
    console.log(todos);
    console.log("Method SET ALL");
    console.log(this.todos);
    this.emit('change');
  }
  get(){
    console.log("Method GET")
    console.log(this.todos);
    return this.todos;
  }
  handleAction(action){
    console.log(action);
    switch(action.type){
      case "CREATE_TODO":{
        this.create();
        break;
      }
      case "DELETE_TODO":{
        this.delete(action.todoIndex);
        break;
      }
      case "FETCH_TODO":{
        this.setAll(action.todos);
        break;
      }
      default: return true;
    }
  }
}
const todoStore = new TodoStore();
dispatcher.register(todoStore.handleAction);
window.dispatcher = dispatcher;
export default todoStore;
