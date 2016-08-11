'use strict';

module.exports = () =>{
  let mongoose = require('mongoose');
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/todos');

  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('database connect');
  });
  return db;
};
