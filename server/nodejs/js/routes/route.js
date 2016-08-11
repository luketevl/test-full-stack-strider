'use strict';

const todosCtrl             = require('../controllers/todosController')();
const Todo                  = require('../models/todos')();
const path                  = require('path');
const multiparty            = require('connect-multiparty');
const multipartyMiddleware  = multiparty();

// ROUTE for API
module.exports = (app) => {

  app.get('/uploads/images/:_id/:name', function(req, res) {
    res.sendFile(path.join(`${__dirname}/../../uploads/images/${req.params._id}/${req.params.name}`));
});


  // ROUTE for API
  app.get('/api/v1/todo', (req, res) => {
    Todo.find({}, function(err, todos) {
      if (err){
        res.status(500).json(err);
        throw err;
      }
      console.log('Selected');
      let new_todos = todos.map(todo => {
        console.log(333333, todo);
        return {
            _id: todo._id,
            name: todo.name,
            checked: todo.checked,
            img: todosCtrl.getFile(todo)
        };
      });
      console.log(new_todos);
      res.status(202).json(new_todos);
    });
    // How we are using JSON the response use the function json

  });

  app.delete('/api/v1/todo/:_id', (req, res) => {
    Todo.findByIdAndRemove(req.params._id, function(err) {
      if (err){
        res.status(500).json(err);
        throw err;
      }
      console.log('Todo deleted');
      res.status(202).json({sucess: true});

    });
  });

  app.put('/api/v1/todo/', multipartyMiddleware, (req, res) => {
    let data = req.body;
    let {name, checked, _id} = data;
    let file;
    let result_todo;
    if(req.files){
      file = req.files.file;
    }

    Todo.findByIdAndUpdate(_id, {name, checked}, function(err, todo) {
      if (err){
        res.status(500).json(err);
        throw err;
      }
      if(file){
        let result = todosCtrl.upload(file, todo);
        if(result){
          var img_path = result.target_path;
        }
        console.log(result);
      }
      result_todo = {
        _id : todo._id,
        img: img_path
      };
      console.log('Todo edited');
      res.status(202).json({sucess: true, todo: result_todo});

    });
  });

  // ROUTE to API FUEL
  app.post('/api/v1/todo', multipartyMiddleware,(req, res) => {
    let data = req.body;
    let {name, checked, _id} = data;
    let file;
    let result_todo;
    if(req.files){
      file = req.files.file;
    }
    data = {
      name,
      checked
    }
    let todo = new Todo(data);
    todo.save().then((result, err) =>{
      if(err){
        res.status(500).json(err);
        throw err;
      }
      if(file){
        let result_upload = todosCtrl.upload(req, todo);
        if(result){
          var img_path = result.target_path;
        }
    }
      result_todo = {
        _id : result._id,
        name: result.name,
        img: img_path
      };
      res.status(202).json({success: true, todo: result_todo});
    });
  });
};
