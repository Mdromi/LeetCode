/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) { 
    if(n <= 3) return n;

    let a = 3, b = 2; 
    for (let i = 0; i < n - 3; i++) { 
        a += b;
        b = a - b
    }
    return a
};

let result = climbStairs(45)
console.log(result);

// https://blog.devgenius.io/leetcode-70-climbing-stairs-get-solution-with-images-1939a8e6d525
