'use strict';

let mongoose = require('mongoose');
let con =  require('../../config/db')();
// DCL for project
module.exports = () => {
  let Schema = mongoose.Schema;

  let todoSchema = new Schema({
    name: String,
    checked: Boolean,

  });
  let Todo = mongoose.model('Todo', todoSchema);
  return Todo;
};
