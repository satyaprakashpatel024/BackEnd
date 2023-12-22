let fs = require('fs');

//creating a file by file handling
// fs.writeFileSync('textFile.txt','this file is created by file handling');

//reading a data from a existing file
// let data = fs.readFileSync('textFile.txt');
// console.log(data.toString());

// updating data in file by file handling
// fs.appendFileSync('textFile.txt','\nthis is the second line of the file.');

// deleting a file by file handling 
fs.unlinkSync('abc.txt');

