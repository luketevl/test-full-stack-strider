'use strict';
const fs  = require('fs');
const path = __dirname+'/../../uploads/images/';
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
       fs.rmdirSync(path+todo._id);
     } catch(e) {
       try{
         console.log('PASTAAAAAAAA FDP');
         fs.mkdirSync(path+todo._id, 777);

       }
       catch(e) {
         console.log(e);
       }
     }

    fs.renameSync(tmp_path, target_path);
    return {
      success: true,
      target_path: `http://localhost:595/uploads/images/${todo._id}/${file.name}`,
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

  let _getFile = (todo) => {
    try{
      let files = fs.readdirSync(path+todo._id);
      if(files){
        return `http://localhost:595/uploads/images/${todo._id}/${files[files.length-1]}`;
      }
    }
    catch(e){
      console.log(e);
    }
    return '';
  };
    return{
      upload: _upload,
      delete: _delete,
      getFile: _getFile
    };
};
