/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function binarySearch(arr, l, r, x){
    let mid = l + Math.floor((r - l) / 2);
    if (r >= l) {
        if (arr[mid] == x) return mid;

        if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);

        return binarySearch(arr, mid + 1, r, x);
    }
    return mid + 1
}

var searchInsert = function(nums, target) {
    const length = nums.length;

    return result = binarySearch(nums, 0, length-1, target)
};

const nums = [1,3,5,6]
const v = searchInsert(nums, 2)
console.log(v);