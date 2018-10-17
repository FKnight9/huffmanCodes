const frequency = require("./frequency");
const fs = require('fs');

fs.readFile('infile.dat', 'utf8', function(err, data) {

    if (err) {
        console.log(err);
    } else {
        frequency.getFrequencyTable(data)
    }
});

// 1. the frequency table for the source text,
// 2. the Huffman code for each letter and digit in the source code, and
// 3. the length of the coded message in terms of number of bits