const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'files-copy'), (error, files) => {
  if (error) {

    fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
      if (err) {
        throw err;
      }
    });

  } else {

    files.forEach((elem) => {
      fs.unlink(path.join(__dirname, 'files-copy', elem), (err) => {
        if (err) {
          throw err;
        }
      });
    });

  }
});

fs.readdir(path.join(__dirname, 'files'), (err, files) => { 
  if (err) {
    throw err;
  }
  
  files.forEach((elem) => {

    fs.copyFile(
      path.join(__dirname, 'files', elem),
      path.join(__dirname, 'files-copy', elem),
      (err) => {
        if (err) {
          throw err;
        }
      }
    );

  });
 });
