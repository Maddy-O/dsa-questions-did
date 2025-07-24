var romanToInt = function(s) {
    const roman = {
        "I" : 1,
        'V' : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    let num = 0; let sum = 0;
    for(let i=0;i<s.length;i++){
        console.log("Roman number ----", s[i])
        sum = sum + roman[s[i]];
        console.log("Sum-----", sum)
        num = num + roman[s[i]];
        if((s[i-1]) === "I" && (s[i] === "V" || s[i] === "X")){
            num = num-2;
        }
        else if((s[i-1]) === "X" && (s[i] === "L" || s[i] === "C")){
            num = num-20;
        }
        else if((s[i-1]) === "C" && (s[i] === "D" || s[i] === "M")){
            num = num-200;
        }
        // else {
        //     num = num + roman[s[i]];
        // }
    }
    return num;
};

// console.log(romanToInt("IV"));
console.log(romanToInt("MCMXCIV"));


const romanToInt = function(s) {
    const roman = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100,
        D: 500, M: 1000
    };

    let num = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = roman[s[i]];
        const next = roman[s[i + 1]];

        if (next > curr) {
            num -= curr;
        } else {
            num += curr;
        }
    }

    return num;
};