'use strict';
const fs  = require('fs');
const path = './uploads/images/';
module.exports = () =>{
  let _upload = (file, todo)=>{
  // get the temporary location of the file
    if(!file){
      return {target_path: ''};
    }
    let tmp_path = file.path;
    let target_path = `${path}${todo._id}/${file.name}`;
    // move the file from the temporary location to the intended location
    try {
       fs.lstatSync(path+todo._id);
     } catch(e) {
       fs.mkdirSync(path+todo._id, 777);
     }

    fs.renameSync(tmp_path, target_path);
    return {
      success: true,
      target_path: file.name
    };
  };

  let _delete = (todo) => {
    try {
      fs.rmdirSync(path+todo._id);
    } catch(e) {
      console.log(e);
    }
    fs.unlink(path+todo._id, function() {
        if (err){
          throw err;
        }
        return {
          success: true,
        };
    });
  };
    return{
      upload: _upload,
      delete: _delete,
    };
};
