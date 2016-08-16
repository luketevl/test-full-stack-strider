import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter{
  constructor(){
    super();
    this.todos        = [
            {
               _id: "58abbdfd0f635ec7502381bf",
               checked: true,
               img: "",
               name: "Make bed"
          },
          {
             _id: "57abbdfd0f635ec7502381bf",
             checked: true,
             img: "",
             name: "Cokkie"
        },
        {
           _id: "59abbdfd0f635ec7502381bf",
           checked: true,
           img: "",
           name: "Supermarket"
      }
        ];

    this.handleAction = this.handleAction.bind(this);
  }

  create(){
    let todo = {
      name: '',
      img: '',
      checked: true
    };
    this.todos.push(todo);
    this.emit('change');
  }
  save(todo){
    this.todos.push(todo);
    this.emit('change');
  }
  delete(todo){
    this.emit('change');
  }
  get(){
    return this.todos;
  }
  handleAction(action){
    console.log(action);
    switch(action.type){
      case "CREATE_TODO":{
        this.create();
      }
      case "DELETE_TODO":{
        this.delete(action.todo);
      }
      case "FETCH_TODO":{
        this.get();
      }
    }
  }
}
const todoStore = new TodoStore();
dispatcher.register(todoStore.handleAction);
window.dispatcher = dispatcher;
export default todoStore;
