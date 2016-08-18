import dispatcher from "../dispatcher";

export function deleteTodo(index){
  dispatcher.dispatch({
    type: "DELETE_TODO",
    todoIndex: index,
  });
};

export function createTodo(){
  dispatcher.dispatch({
    type: "CREATE_TODO",
  });
};

export function getTodos(todos){
  dispatcher.dispatch({
    type: "FETCH_TODO",
    todos
  });
}
