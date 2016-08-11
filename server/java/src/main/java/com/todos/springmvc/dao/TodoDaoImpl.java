/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.todos.springmvc.dao;

import java.util.List;
 
import org.hibernate.Criteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
 
import com.todos.springmvc.model.Todo;
 
 
 
@Repository("todoDao")
public class TodoDaoImpl extends AbstractDao<Integer, Todo> implements TodoDao {
 
    public Todo findById(int id) {
        Todo todo = getByKey(id);
        return todo;
    }
 
 
    @SuppressWarnings("unchecked")
    public List<Todo> findAllTodos() {
        Criteria criteria = createEntityCriteria().addOrder(Order.asc("name"));
        criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
        List<Todo> users = (List<Todo>) criteria.list();
         
        return users;
    }
 
    public void save(Todo todo) {
        persist(todo);
    }
 
    public void deleteById(int id) {
        Criteria crit = createEntityCriteria();
        crit.add(Restrictions.eq("id", id));
        Todo todo = (Todo)crit.uniqueResult();
        delete(todo);
    }
 
}