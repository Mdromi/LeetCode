/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 function bubbleSort(arr, len){
   
    let i, j;
    let isSwapped = false;

    for(i =0; i < len; i++){
      isSwapped = false;
      for(j = 0; j < len; j++){
          if(arr[j] > arr[j + 1]){
            let temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            isSwapped = true;
          }
      }   
      if(!isSwapped){
        break;
      }
    }
    return arr
  }

 var targetIndices = function(nums, target) {
    let length = nums.length 
    let number = []
    nums = bubbleSort(nums, length)
    for (let i = 0; i < length; i++) {
        if (nums[i] === target) number.push(i)
        if(nums[i] > target) break
    }
    return  number 
};
const nums2 = [48,90,9,21,31,35,19,69,29,52,100,54,21,86,6,45,42,5,62,77,15,38] // [ 1, 2, 2, 3, 5 ]
const nums = [1,2,5,2,3]
console.log(targetIndices(nums2, 6));