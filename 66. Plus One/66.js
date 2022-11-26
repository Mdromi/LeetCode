/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {

    const len = digits.length -1;
    let x = 0
    for (let j = len; j >= 0 ; j--) {
        if(digits[j] == 9) {
            x++
        } else {
            break
        }
    }

    if(x > 0 ) {
        if(x == len+1){
            digits[0] = 1
            while (x >= 1) {
                digits[x] = 0
                x--
            }
            return digits
        }
        else {
            digits[len - x] += 1
            while (x != 0) {
                digits[(len+1) - x] = 0
                x--
            }
            return digits
        }
    } else {
        digits[len] += 1
    }
    return digits
};

const digits = [4,3,2,1]
const v = plusOne(digits)
console.log(v);