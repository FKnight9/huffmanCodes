const frequency = require("./frequency");

let huffmanTable = [];

function createHuffmanTree(sortedFreqTable) {
   while (sortedFreqTable.length > 1) {
        let left = sortedFreqTable.shift();
        let right = sortedFreqTable.shift();
        let newNode = [
            '*',
            left[1] + right[1],
            left,
            right
        ]
        sortedFreqTable.unshift(newNode);
        // Idea taken from https://www.w3schools.com/js/js_array_sort.asp
        sortedFreqTable.sort(function(a, b){
            return a[1] - b[1]
        });
        // Done
    }
    return sortedFreqTable;
}

function createHuffmanTable(huffmanTree) {
    huffmanTable = [];
    let head = huffmanTree[0];
    preOrderTraversal(head, "");
    // Idea taken from https://www.w3schools.com/js/js_array_sort.asp
    huffmanTable.sort(function(a,b) {
        return b[1] - a[1];
    });
    // Done
    return huffmanTable;
}

function preOrderTraversal(head, binary) {
    if (head[0] !== '*'){
        huffmanTable.push([head[0], head[1], binary])
    } else {
        preOrderTraversal(head[2], binary + "0");
        preOrderTraversal(head[3], binary + "1");
    }
}

function getLengthInBits(table) {
    let length = 0;
    if (table.length === 1) return 1;
    for (let i = 0; i < table.length; i++) {
        length += table[i][1] * table[i][2].length;
    }
    return length;
}

function printableHuffmanTable(table) {
    let printable = [];
    printable.push(["Symbol" , "Huffman Code"]);
    if (table.length === 1) {
        printable.push([table[0][0], '0']);
        return printable;
    }

    for(let i = 0; i < table.length; i++) {
        printable.push([table[i][0], table[i][2]]);
    }
    return printable;
}

module.exports = {
    createHuffmanTree,
    createHuffmanTable,
    getLengthInBits,
    printableHuffmanTable
}