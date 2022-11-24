/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */

 var removeDigit = function(number, digit) {

    const strlen = number.length;
    let temp = number;
    const positiveDigit = [];
    for (let i = 0; i < strlen; i++) {
        if(number[i] === digit) {
            temp = number.slice(0, i) + number.slice(i+1, number.length)
            positiveDigit.push(temp)
        }
    }

    let bigDigit = positiveDigit[0]
    for (let i = 1; i < positiveDigit.length; i++) {
        if(positiveDigit[i] > bigDigit) bigDigit = positiveDigit[i];
    }

    return bigDigit
};

var value =  removeDigit ('133235', '3') 
console.log(value);