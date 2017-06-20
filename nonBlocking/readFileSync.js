var fs = require('fs');

var onFileLoad = (err, file) =>{
    console.log("Got the file!");  
};

console.log(`Going to get a file.`);
fs.readFile('./nonBlocking/readFileSync.js', onFileLoad);
console.log(`App continues...`);