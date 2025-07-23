// Argument Method ...

const fs = require('fs');

let data = process.argv[2];

fs.writeFile('../Argdemo.txt',data , function(err,data){
    if(err){
       return console.log(err);
    }
    console.log("data written sucessfully");
})


// Using slice methid we cant write more than one word 
// we also can write JSON Object