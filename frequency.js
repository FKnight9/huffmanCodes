let table = {};
let sLength = 0;

function getFrequencyTable(str) {
    sLength = str.length;
    for (var i = 0; i < sLength; i++) {
        if (isValid(str.charAt(i)) == true)
        {
            check(str.charAt(i));
        }
      }
    return sortFrequencyTable(table);
}

function isValid(ch){
    if (ch >= '0' && ch <= '9')
    {
        return true;
    }

    else if (ch >= 'A' && ch <= 'Z')
    {
        return true;
    }

    else if (ch >= 'a' && ch <= 'z')
    {
        return true;
    }

    else
    {
        return false;
    }
}

function check(ch){
    if (ch in table)
    {
        table[ch]++;
    }
    else
    {
        table[ch] = 1;
    }
}

// Received basis for following code from https://stackoverflow.com/questions/1069666/sorting-javascript-object-by-property-value
function sortFrequencyTable(frequencyTable) {
    let sortedTable = [];
    for (let c in frequencyTable) {
        sortedTable.push([c, frequencyTable[c]]);
    }
    sortedTable.sort(function(a, b) {
        return a[1] - b[1];
    });

    return sortedTable;
}
// ends here

function printableFrequencyTable(sortFrequencyTable) {
    let printable = [];
    printable.push(["Symbol", "Frequency"]);
    for (let i = sortFrequencyTable.length - 1; i >= 0; i--) {
        printable.push([sortFrequencyTable[i][0], (sortFrequencyTable[i][1] / sLength * 100) + '%']);
    }
    return printable;
}

module.exports = {
    getFrequencyTable,
    printableFrequencyTable
}