package com.todos.springmvc.service;

import java.util.List;

import com.todos.springmvc.model.Todo;

public interface TodoService {
	
	Todo findById(int id);
	
	void saveTodo(Todo todo);
	
	void updateTodo(Todo todo);
	
	void deleteTodoById(int id);

	List<Todo> findAllTodos(); 
	
	public boolean isTodoExist(Todo todo);
	
        
}
