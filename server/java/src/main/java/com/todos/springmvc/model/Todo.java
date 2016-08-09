/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.todos.springmvc.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
 
@Entity
@Table(name="todos")
public class Todo {
 
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id; 
     
    @Column(name="name", length=100, nullable=false)
    private String name;

    @Column(name="checked", length=1, nullable=false)
    private boolean checked;
     
    private Todo todo;
     
    public int getId() {
        return id;
    }
 
    public void setId(Integer id) {
        this.id = id;
    }
 
    public String getName() {
        return name;
    }
 
    public void setName(String name) {
        this.name = name;
    }
 
    public boolean getChecked() {
        return this.checked;
    }
 
    public void setChecked(boolean checked) {
        this.checked = checked;
    }
 
 public Todo getTodo() {
        return todo;
    }
 
    public void setUser(Todo todo) {
        this.todo = todo;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Todo other = (Todo) obj;
        if (id != other.id)
            return false;
        return true;
    }
}