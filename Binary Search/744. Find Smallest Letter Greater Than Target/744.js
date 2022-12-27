/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    let left, right, mid, largest;
    left = 0
    right = letters.length - 1

    // if(target == 'z') return target

    while(left <= right) {
        mid = Math.floor(left + (right - left) / 2)

        if(letters[mid] > target) {
            largest = letters[mid]
            right = mid - 1
        } 

        // if(letters[mid] < target) left = mid + 1
        else left = mid + 1
    }
   return largest ?  largest : letters[0]
};

const letters = ["x","x","y","y"]
console.log(nextGreatestLetter(letters, 'z'));