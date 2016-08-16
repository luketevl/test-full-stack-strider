import dispatcher from "../dispatcher";

export function deleteTodo(todo){
  dispatcher.dispatch({
    type: "DELETE_TODO",
    todo,
  });
};

export function createTodo(){
  dispatcher.dispatch({
    type: "CREATE_TODO",
  });
};

export function getTodos(){
  dispatcher.dispatch({
    type: "FETCH_TODO"
  });
}
