// 50. Pow(x, n)

// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000

// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104

//-----------------------------------------------------------------------------

// Compute x^n
// Binary Exponentiation

let myPow = function (x, n) {

    if (n === 0) return 1.0;
    if (x === 0) return 0.0;
    if (x === 1) return 1.0;
    if (x === -1 && n % 2 === 0) return 1.0;
    if (x === -1 && n % 2 !== 0) return -1.0;

    let binForm = n;
    if (n < 0) {
        x = 1 / x;
        binForm = -binForm;
    }

    let ans = 1.0;

    while (binForm > 0) {
        if (binForm % 2 === 1) {
            ans *= x;
        }
        x *= x;
        binForm = Math.floor(binForm / 2);
    }

    return ans;

};

console.log(myPow(2, 10)); // 1024
console.log(myPow(2, -2)); // 0.25
console.log(myPow(-2, 3)); // -8