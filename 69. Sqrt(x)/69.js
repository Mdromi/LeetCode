/**
 * @param {number} x
 * @return {number}
 */
 function binarySearch(x, start, end){
    let mid = start + Math.floor((end - start) / 2);
    if (end >= start) {
        if(mid * mid === x) return mid
        if (mid * mid > x) return binarySearch(x, start, mid - 1)

        return binarySearch(x, mid + 1, end);
    }
    return mid
}
 var mySqrt = function(x) {
    let start = 0, end = x;
    return  binarySearch(x, start, end)
};


const v = mySqrt(8)
console.log(v);