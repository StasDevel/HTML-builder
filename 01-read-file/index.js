const fs = require('fs');
const path = require('path');

let res = '';
const readable = fs.createReadStream(path.join(__dirname, 'text.txt'));
readable.on('data', (chunck) => {
  res += chunck;
});
readable.on('end', () => {
  console.log(res);
});
readable.on('error', error => console.log(error.message));

