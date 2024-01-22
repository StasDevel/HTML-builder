const fs = require('fs');
const path = require('path');

fs.writeFile(
  path.resolve(__dirname, './project-dist/bundle.css'),
  '',
  (err) => {
    if (err) throw err;
  },
);

fs.readdir(
  path.join(__dirname, 'styles'),
  { withFileTypes: true },
  function (err, items) {
    let res = [];

    for (let i = 0; i < items.length; i++) {
      if (items[i].isFile() === true && path.extname(items[i].name) == '.css') {
        fs.readFile(
          path.join(__dirname, 'styles', items[i].name),
          'utf-8',
          (error, data) => {
            res.push(data);

            fs.appendFile(
              path.resolve(__dirname, './project-dist/bundle.css'),
              data,
              (err) => {
                if (err) throw err;
              },
            );
          },
        );
      }
    }
  },
);
