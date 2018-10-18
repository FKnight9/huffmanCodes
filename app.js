const huffman = require("./huffman");
const frequency = require("./frequency");
const fs = require('fs');
const table = require('table').table;

//Received basis for following code from https://nodejs.org/api/fs.html
fs.readFile('infile.dat', 'utf8', function(err, str) {

    if (err) {
        console.log(err);
    } else {
        if (str === "" || typeof str !== "string") throw "infile.dat is empty"
        let sortedFrequencyTable = frequency.getFrequencyTable(str);
        let printFrequencyTable = frequency.printableFrequencyTable(sortedFrequencyTable);
        let huffmanTree = huffman.createHuffmanTree(sortedFrequencyTable);
        let huffmanTable = huffman.createHuffmanTable(huffmanTree);
        let length = huffman.getLengthInBits(huffmanTable);
        let printHuffmanTable = huffman.printableHuffmanTable(huffmanTable);
        
        let answer = "  Frequency Table\n" 
            + table(printFrequencyTable) 
            + "\n\n" 
            + "  Huffman Code Table\n" 
            + table(printHuffmanTable)
            + "\n\n  Total Bits: "
            + length;

        fs.writeFile("outfile.dat", answer, "utf8", function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }
});
// ends here

// 1. the frequency table for the source text,
// 2. the Huffman code for each letter and digit in the source code, and
// 3. the length of the coded message in terms of number of bits