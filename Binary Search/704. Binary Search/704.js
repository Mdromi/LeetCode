
function binarySearch(arr, l, r, x) {
    let mid = l + Math.floor((r - l) / 2)
    if(r >= l) {
        if(arr[mid] == x) return mid;
        if(arr[mid] > x) return binarySearch(arr, l, mid-1, x)
        return binarySearch(arr, mid+1, r, x)
    }
    return -1
}
var search = function(nums, target) {
    const len = nums.length;
    return result = binarySearch(nums, 0, len-1, target)
};
const nums = [-1,0,3,5,9,12]
const v = search(nums, 5)
console.log(v);