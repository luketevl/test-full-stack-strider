'use strict';

const todosCtrl = require('../controllers/todosController')();
const Todo = require('../models/todos')();

// ROUTE for API
module.exports = (app) => {

  // ROUTE for API
  app.get('/api/v1/todo', (req, res) => {
    Todo.find({}, function(err, todos) {
      if (err){
        res.status(500).json(err);
        throw err;
      }
      console.log('Selected');
      res.status(202).json(todos);
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

  app.put('/api/v1/todo/', (req, res) => {
    let data = req.body;
    let {name, checked, _id} = data;
    console.log(_id, name, checked);
    Todo.findByIdAndUpdate(_id, {name, checked}, function(err, todo) {
      if (err){
        res.status(500).json(err);
        throw err;
      }
      console.log('Todo edited');
      res.status(202).json({sucess: true});

    });
  });

  // ROUTE to API FUEL
  app.post('/api/v1/todo', (req, res) => {
    let data = req.body;
    let {name, checked, _id} = data;
    data = {
      name,
      checked
    }
    let todo = new Todo(data);
    todo.save().then((result, err) =>{
      console.log(err);
      if(err){
        res.status(500).json(err);
        throw err;
      }
      console.log('Success save');
      res.status(202).json({success: true, result});
    });
  });
};
