const fs = require('fs');
const path = require('path');

fs.readdir(
  path.join(__dirname, 'secret-folder'),
  { withFileTypes: true },
  (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((elem) => {
      fs.stat(path.resolve(elem.path, elem.name), (err, stats) => {
        if (stats.isFile()) {
          console.log(
            `${elem.name.split('.')[0]} - ${path
              .extname(elem.name)
              .slice(1)} - ${stats.size} bytes`,
          );
        }
      });
    });
  },
);
