/**
 *  node 14.longest-common-prefix.js
 * @param {string[]} strs
 * @return {string}
 */

var compareString =  function() {

}

 var longestCommonPrefix = function(strs) {
    
    let length = strs.length
    let prefix = strs[0]
    
    for(let i = 1; i < length; i++) {
        let currentElementLength = Math.min(strs[i].length, prefix.length)
        let temp = ''
        for(let j = 0; j< currentElementLength; j++) { 
            if(strs[i][j] ===  prefix[j]) {
                temp += prefix[j]
            }   else {
                break
            }   
        }
        prefix = temp
    }

    return prefix
    
};

var strs = ["flower","flow","flight"]
let a = longestCommonPrefix(strs)
console.log(a);