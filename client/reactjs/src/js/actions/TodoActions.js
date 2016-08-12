import dispatcher from "../dispatcher";

export function deleteTodo(todo){
  dispatcher.dispatch({
    type: "DELETE_TODO",
    todo,
  });
};

export function createTodo(todo){
  dispatcher.dispatch({
    type: "CREATE_TODO",
    todo
  });
};

export function getTodos(){
  dispatcher.dispatch({
    type: "FETCH_TODO"
  });
}
