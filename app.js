const frequency = require("./frequency");
const fs = require('fs');
let str = "";
fs.readFile('infile.dat', 'utf8', function(err, data) {

    if (err) {
        console.log(err);
    } else {
        frequency.getFrequencyTable(str)
    }
});