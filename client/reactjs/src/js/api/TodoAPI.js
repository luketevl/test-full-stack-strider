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

export function delete(todo){
  request.del(`${Config.URL_SERVER}/${todo._id}`).end((err, resp) => {
    if(err){
      console.log(err);
      return err;
    }
    TodoActions.deleteTodo(todo);
  });
}
