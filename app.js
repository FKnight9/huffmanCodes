const huffman = require("./huffman");
const frequency = require("./frequency");
const fs = require('fs');

//Received basis for following code from https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
fs.readFile('infile.dat', 'utf8', function(err, data) {

    if (err) {
        console.log(err);
    } else {
        let sortedFrequencyTable = frequency.getFrequencyTable(data)
        let huffmanTree = huffman.createHuffmanTree(sortedFrequencyTable);
        let huffmanTable = huffman.createHuffmanTable(huffmanTree);
        let length = huffman.getLengthInBits(huffmanTable);
    }
});
// ends here

// 1. the frequency table for the source text,
// 2. the Huffman code for each letter and digit in the source code, and
// 3. the length of the coded message in terms of number of bits