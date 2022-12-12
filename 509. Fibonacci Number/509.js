/**
 * @param {number} n
 * @return {number}
 */
const fibonacci = (n) => {
    if(n < 2) return n
    return fibonacci(n -1) + fibonacci(n -2)
}
 var fib = function(n) {
    let result = fibonacci(n)
    console.log(result);
};

fib(2)
// https://medium.com/leetsolve/how-i-solve-leetcode-509-fibonacci-number-f8abeb2c21c0