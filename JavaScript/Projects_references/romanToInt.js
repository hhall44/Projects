// LeetCode Problem 13: Roman to Integer

let s = "MCMXCIV";

var romanToInt = function(s) {
    // create a hash table to store the symbols and their values
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let total = 0;

    // iterate through the string
    for(i = 0; i < s.length; i++) {
        let curr = s[i];
        let next = s[i+1];

        // check if the current symbol is less than the next symbol
        if (symbols[curr] < symbols[next]) {
            total -= symbols[curr];
        } else {
            total += symbols[curr]
        }
    }

    return total;
    
};

console.log(romanToInt(s));