/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    const needleLen = needle.length;
    const haystackLen = haystack.length;
    let returnValue = -1;
    let temp = haystack


    for (let i = 0; i < haystackLen; i++) {

        let slice = temp.slice(i)
        if(slice.slice(0, needleLen) === needle){
            return returnValue = i;
        }
    }

    return returnValue
};

console.log(strStr('aaa', 'aa'));