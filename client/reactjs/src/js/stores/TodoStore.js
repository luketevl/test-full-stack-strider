import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter{
  constructor(){
    super();
    this.todos        = [];
    this.get          = this.get.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  create(todo){
    this.todos.push(todo);
    this.emit('change');
  }
  delete(todo){
    this.emit('change');
  }
  get(todos){
    return this.todos;
  }
  handleAction(action){
    switch(action.type){
      case "CREATE_TODO":{
        this.create(action.todo);
      }
      case "DELETE_TODO":{
        this.delete(action.todo);
      }
      case "FETCH_TODO":{
        
      }
    }
  }
}
const todoStore = new TodoStore();
dispatcher.register(todoStore.handleAction);
window.dispatcher = dispatcher;
export default todoStore;
