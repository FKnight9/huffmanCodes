let table = {};

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
    if (table[ch])
    {
        table[ch]++;
    }
    else
    {
        table[ch] = 1;
    }
}

$("#importFileBtn").change(function (event) {
    $.each(event.target.files, function (index, infile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            // e.target.result should contain the text
            log(e.target.result);
        };
        var str = reader.readAsText(infile);
    });
});

  /*function readTextFile(file:infile.dat)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}*/

for (var i = 0; i < str.length; i++) {
    if (isValid == true)
    {
        check(str.charAt(i));
    }
  }