// Move All Zeroes to End
// Difficulty: EasyAccuracy: 45.51%Submissions: 369K+Points: 2Average Time: 15m
// You are given an array arr[] of non-negative integers. You have to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. The operation must be performed in place, meaning you should not use extra space for another array.

// Examples:

// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.
// Input: arr[] = [10, 20, 30]
// Output: [10, 20, 30]
// Explanation: No change in array as there are no 0s.
// Input: arr[] = [0, 0]
// Output: [0, 0]
// Explanation: No change in array as there are all 0s.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 105

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

// ------------------------------------------------------------------------
// function moveAllZerosToEnd(arr) {
//     let nonZeroIndex = 0; // Pointer for the next non-zero element
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             // If the current element is non-zero, move it to the next non-zero position
//             arr[nonZeroIndex] = arr[i];
//             nonZeroIndex++;
//         }
//     }
//     // Fill the remaining positions with zeros
//     for (let i = nonZeroIndex; i < arr.length; i++) {
//         arr[i] = 0;
//     }
//     console.log(arr);
//     return arr;
// }
// moveAllZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]); // Output: [1, 2, 4, 3, 5, 0, 0, 0]
// moveAllZerosToEnd([10, 20, 30]); // Output: [10, 20, 30]
// moveAllZerosToEnd([0, 0]); // Output: [0, 0]
// moveAllZerosToEnd([0, 1, 0, 3, 12]); // Output: [1, 3, 12, 0, 0]
// moveAllZerosToEnd([5, 0, 0, 2, 0, 3]); // Output: [5, 2, 3, 0, 0, 0]
// moveAllZerosToEnd([0, 0, 0, 0]); // Output: [0, 0, 0, 0]




//  Practice

moveAllZerosToEnd2 = (arr) => {

    let count = 0; // Count of non-zero elements

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 0) {
            // If the current element is non-zero, place it at the count index
            arr[count] = arr[i];
            count++;
        }

    }
    console.log(count);

    while (count < arr.length) {
        // Fill the remaining positions with zeros 
        arr[count] = 0;
        count++;
    }

    return arr;

}

console.log(moveAllZerosToEnd2([1, 2, 0, 4, 3, 0, 5, 0])); // Output: [1, 2, 4, 3, 5, 0, 0, 0]
console.log(moveAllZerosToEnd2([10, 20, 30])); // Output: [10, 20, 30]
console.log(moveAllZerosToEnd2([0, 0])); // Output: [0,  0]
console.log(moveAllZerosToEnd2([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]