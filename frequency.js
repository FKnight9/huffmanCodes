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