package com.todos.springmvc.service;

import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
 
import com.todos.springmvc.dao.TodoDao;
import com.todos.springmvc.model.Todo;
 
 
@Service("todoService")
@Transactional
public class TodoServiceImpl implements TodoService{
 
    @Autowired
    private TodoDao dao;
 
    public Todo findById(int id) {
        return dao.findById(id);
    }
 
    public void saveTodo(Todo todo) {
        dao.save(todo);
    }
 
  
    public void updateTodo(Todo todo) {
        Todo entity = dao.findById(todo.getId());
        if(entity!=null){
            entity.setId(todo.getId());
            entity.setName(todo.getName());
        }
    }
 
     
    public void deleteTodoById(int id) {
        dao.deleteById(id);
    }
 
    public List<Todo> findAllTodos() {
        return dao.findAllTodos();
    }
 
    public boolean isTodoExist(Todo param) {
        int id = param.getId();
        Todo todo = findById(id);
        return ( todo == null || ((param != null) && (todo.getId() == id)));
    }

  
}