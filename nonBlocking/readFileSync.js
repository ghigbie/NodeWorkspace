var fs = require('fs');

console.log(`Going to get a file.`);
fs.readFile('./nonBlocking/readFileSync.js', (err, file) => {
    console.log(`Got the file`);
});

console.log(`App continues...`);