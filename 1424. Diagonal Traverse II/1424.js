/**
 * @param {number[][]} nums
 * @return {number[]}
 */

 var findDiagonalOrder = function(nums) {
    const diagonalArr = []
    const diagonalLen = nums.length

    const maxLenArr = nums.map(num => num.length);
    let maxLength = Math.max(...maxLenArr) 
    

    if(diagonalLen <= 1) return nums[nums.length-1]
    let k= 0;

    for (let row = 0; row < diagonalLen; row++) {
        for (let col = 0, k = row; col <= row ; col++) {
            if(typeof (nums[k][col]) === 'number') diagonalArr.push(nums[k][col])
            k--
        }
    }

    const lastPartLen = nums[nums.length-1].length;
    let len = lastPartLen
    console.log(diagonalArr);
    if(lastPartLen > 0)
    {
        let j = 1
        for (let i = 1; i <= maxLength; i++) {
            row = nums.length-1
            
            for (let col = j, k = row; col < maxLength; col++) {
                if(nums[k]) {
                    if(typeof (nums[k][col]) === 'number') diagonalArr.push(nums[k][col])
                }
                k--
            }
            len--;
            j++
            
        }
    }
    return diagonalArr
};
 
 const nums = [[1,2,3],[4,5,6],[7,8,9]]

const v = findDiagonalOrder(nums)
console.log(v);

/**
 * 1,36,9,7,4,20,1,7
 * 11,27,7,38,32,17,13
 * 35,16,7,7,21,13
 * 5,40,27,37,26
 * 12,17,2,3,17,9,6,4
 * 29,5,19,37,4,7,34,32,9
 * 13,34,20,24,32
 */

 [1,11,36,35,27,9,5,16,7,7,12,40,7,38,4,29,17,27,7,32,20,13,5,2,37,21,17,1,34,19,3,26,13,13,7,20,37,17,24,4,9,32,7,6,34,4]

 [1,11,36,35,27,9,5,16,7,7,12,40,7,38,4,29,17,27,7,32,20,13,5,2,37,21,17,1,34,19,3,26,13,13,7,20,37,17,24,4,9,32,7,6,34,4,32,9]
