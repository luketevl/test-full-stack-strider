/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.todos.springmvc.dao;

import java.util.List;
 
import com.todos.springmvc.model.Todo;
 
 
public interface TodoDao {
 
    Todo findById(int id);
     
    void save(Todo todo);
     
    void deleteById(int id);
     
    List<Todo> findAllTodos();
 
}