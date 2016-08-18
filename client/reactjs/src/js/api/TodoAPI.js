import Config from '../config/Config';
import * as TodoActions from "../actions/TodoActions";

import request from 'superagent';

export function get(){
  request.get(Config.URL_SERVER).end((err, resp) => {
    if(err){
      console.log(err);
      return err;
    }
    TodoActions.getTodos(resp.body);
  });
};

export function deleteTodo(todo){
  request.del(`${Config.URL_SERVER}${todo._id}`).end((err, resp) => {
    if(err){
      console.log(err);
      return err;
    }
    this.get();
  });
}

export function saveTodo(todo){
  console.log('Save Todo API');
  console.log(todo);
  if(todo._id != '' && todo._id !== undefined){
    request.put(Config.URL_SERVER)
      .type('form')
      .send(todo)
      .end((err, resp) => {
        if(err) {
          console.log(err);
          return err;
        }
        this.get();
      });
  }
  else{
    request.post(Config.URL_SERVER)
      .type('form')
      .send(todo)
      .end((err, resp) => {
        if(err) {
          console.log(err);
          return err;
        }
        this.get();
      });
  }
}
