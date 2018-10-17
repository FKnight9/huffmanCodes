//const frequency = require("./frequency");
const fs = require('fs');

fs.readFile('infile.dat', 'utf8', function(err, data) {

    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log("start");