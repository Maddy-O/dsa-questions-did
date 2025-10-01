// Missing And Repeating

// Given an unsorted array arr[] of size n, containing elements from the range 1 to n,
// it is known that one number in this range is missing,
// and another number occurs twice in the array,
// find both the duplicate number and the missing number.

// Examples:

// Input: arr[] = [2, 2]
// Output: [2, 1]
// Explanation: Repeating number is 2 and the missing number is 1.

// Input: arr[] = [1, 3, 3]
// Output: [3, 2]
// Explanation: Repeating number is 3 and the missing number is 2.

// Input: arr[] = [4, 3, 6, 2, 1, 1]
// Output: [1, 5]
// Explanation: Repeating number is 1 and the missing number is 5.

// Constraints:
// 2 ≤ n ≤ 106
// 1 ≤ arr[i] ≤ n

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)



//my approach (not able to do)
// function findTwoElement(arr) {
//     // code here

//     let n = arr.length;

//     let count = 0;

//     for (let i = 0; i < n; i++) {

//     }

// }

// better approach

function findTwoElement(arr) {
    let n = arr.length;
    let repeating = -1;

    // Mark visited indices by negating the value
    // at the target index
    for (let i = 0; i < n; i++) {
        let val = Math.abs(arr[i]);

        // If already negative, the number is repeating
        if (arr[val - 1] > 0) {
            arr[val - 1] = -arr[val - 1];
        } else {
            repeating = val;
        }
    }

    let missing = -1;

    // The index with a positive value corresponds 
    // to the missing number
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            missing = i + 1;
            break;
        }
    }

    return [repeating, missing];
}


console.log(findTwoElement([2, 2]));
console.log(findTwoElement([1, 3, 3]));
console.log(findTwoElement([4, 3, 6, 2, 1, 1]));