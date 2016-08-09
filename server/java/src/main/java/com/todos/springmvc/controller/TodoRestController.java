package com.todos.springmvc.controller;
 
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
 
import com.todos.springmvc.model.Todo;
import com.todos.springmvc.service.TodoService;
 
@RestController
public class TodoRestController {
 
    @Autowired
    TodoService todoService; 
 
     
    /**
     * List all TODOS
     * @return 
     */
     
    @RequestMapping(value = "/todo/", method = RequestMethod.GET)
    public ResponseEntity<List<Todo>> listAllTodos() {
        List<Todo> todos = todoService.findAllTodos();
        if(todos.isEmpty()){
            return new ResponseEntity<List<Todo>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Todo>>(todos, HttpStatus.OK);
    }
     
    /**
     * 
     * Create TODO
     * @param todo
     * @param ucBuilder
     * @return 
     */
     
    @RequestMapping(value = "/todo/", method = RequestMethod.POST)
    public ResponseEntity<Void> createTodo(@RequestBody Todo todo,    UriComponentsBuilder ucBuilder) {
        System.out.println("Creating Todo " + todo.getName());
 

        todoService.saveTodo(todo);
 
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/todo/{id}").buildAndExpand(todo.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
 
     
    /**
     * Update TODO
     * @param id
     * @param todo
     * @return 
     */
     
    @RequestMapping(value = "/todo/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Todo> updateUser(@PathVariable("id") int id, @RequestBody Todo todo) {
        System.out.println("Updating Todo " + id);
         
        Todo currentTodo = todoService.findById(id);
         
        if (currentTodo==null) {
            System.out.println("Todo with id " + id + " not found");
            return new ResponseEntity<Todo>(HttpStatus.NOT_FOUND);
        }
 
        currentTodo.setName(todo.getName());
        currentTodo.setChecked(todo.getChecked());
      
         
        todoService.updateTodo(currentTodo);
        return new ResponseEntity<Todo>(currentTodo, HttpStatus.OK);
    }
 
   /**
    * DELETE TODO
    * 
    * @param id
    * @return 
    */
     
    @RequestMapping(value = "/todo/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Todo> deleteTodo(@PathVariable("id") int id) {
        System.out.println("Fetching & Deleting Todo with id " + id);
 
        Todo todo = todoService.findById(id);
        if (todo == null) {
            System.out.println("Unable to delete. Todo with id " + id + " not found");
            return new ResponseEntity<Todo>(HttpStatus.NOT_FOUND);
        }
 
        todoService.deleteTodoById(id);
        return new ResponseEntity<Todo>(HttpStatus.NO_CONTENT);
    }

}