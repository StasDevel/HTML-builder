const fs = require('fs');
const path = require('path');
const process = require('process');

const output = fs.createWriteStream(path.resolve(__dirname, `02-write-file.txt`));

process.stdout.write('Введите сообщение:\n')
process.stdin.on('data', (chunck) => {
  if(chunck.toString().trim() === 'exit') {
    process.on(`exit`, () => {
        process.stdout.write(`До скорых встреч!`)
    });
    process.exit();
  } else {
    output.write(chunck)
  }
})
process.on('SIGINT', () => {
  process.stdout.write('До скорых встреч!');
  process.exit();
});