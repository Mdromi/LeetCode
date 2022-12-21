/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    const len = nums.length 
    const gSum = (len * (len + 1)) / 2
    const nSum = nums.reduce((acc, curr) => acc + curr, 0)

    return gSum - nSum;
};

const nums = [9,6,4,2,3,5,7,0,1] // [0, 1, 2, 3, 4, 5, 6, 7, 9]
const result = missingNumber(nums)
console.log(result);

  