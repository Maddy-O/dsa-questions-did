// Alternate Positive Negative

// Given an unsorted array arr containing both positive and negative numbers.
// Your task is to rearrange the array and convert it into an array of alternate
// positive and negative numbers without changing the relative order.

// Note:
// - Resulting array should start with a positive integer (0 will also be
// considered as a positive integer).
// - If any of the positive or negative integers are exhausted, then add the
// remaining integers in the answer as it is by maintaining the relative order.
// - The array may or may not have the equal number of positive and negative integers.

// Examples:

// Input: arr[] = [9, 4, -2, -1, 5, 0, -5, -3, 2]
// Output: [9, -2, 4, -1, 5, -5, 0, -3, 2]
// Explanation: The positive numbers are [9, 4, 5, 0, 2] and the negative integers
// are [-2, -1, -5, -3]. Since, we need to start with the positive integer first
// and then negative integer and so on (by maintaining the relative order as well),
// hence we will take 9 from the positive set of elements and then -2 after that 4
// and then -1 and so on.

// Input: arr[] = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
// Output: [5, -5, 2, -2, 4, -8, 7, 1, 8, 0]
// Explanation : The positive numbers are [5, 2, 4, 7, 1, 8, 0] and the negative
// integers are [-5,-2,-8]. According to the given conditions we will start from
// the positive integer 5 and then -5 and so on. After reaching -8 there are no
// negative elements left, so according to the given rule, we will add the remaining
// elements (in this case positive elements are remaining) as it in by maintaining
// the relative order.

// Input: arr[] = [9, 5, -2, -1, 5, 0, -5, -3, 2]
// Output: [9, -2, 5, -1, 5, -5, 0, -3, 2]
// Explanation: The positive numbers are [9, 5, 5, 0, 2] and the negative integers
// are [-2, -1, -5, -3]. Since, we need to start with the positive integer first
// and then negative integer and so on (by maintaining the relative order as well),
// hence we will take 9 from the positive set of elements and then -2 after that 5
// and then -1 and so on.

// Constraints:
// 1 ≤ arr.size() ≤ 106
// -106 ≤ arr[i] ≤ 106

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)




// My approach (not working in some cases)

// function rearrange(arr) {
//     // code here

//     let ind = null;

//     for (let i = 0; i < arr.length; i++) {

//         // even indx
//         if (i % 2 === 0 || i === 0) {
//             // || arr[i] === 0
//             arr.splice()
//             if (arr[i] < 0 && ind !== null) {

//                 let temp = arr[i];
//                 arr[i] = arr[ind];
//                 arr[ind] = temp;

//                 ind = null

//             }
//             else if (arr[i] < 0) {
//                 ind = i;
//             }
//         }

//         // odd indx
//         if (i % 2 === 1 || i === 1) {
//             if (arr[i] >= 0 && ind !== null) {
//                 let temp = arr[i];
//                 arr[i] = arr[ind];
//                 arr[ind] = temp;
//                 ind = null
//             }
//             else if (arr[i] >= 0) {
//                 ind = i;
//             }
//         }

//     }

//     console.log(arr);

// }


// better approach
function rearrange(arr) {
    // code here

    let pos = [];
    let neg = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= 0) {
            pos.push(arr[i]);
        }
        else {
            neg.push(arr[i]);
        }

    }

    let posIdx = 0; negIdx = 0; i = 0;

    while (posIdx < pos.length && negIdx < neg.length) {

        if (i % 2 === 0) {
            arr[i++] = pos[posIdx++];
        }
        else {
            arr[i++] = neg[negIdx++];
        }

    }

    while (posIdx < pos.length) {
        arr[i++] = pos[posIdx++];
    }

    while (negIdx < neg.length) {
        arr[i++] = neg[negIdx++];
    }

    console.log(arr);

}

rearrange([9, 4, -2, -1, 5, 0, -5, -3, 2]);
rearrange([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]);
rearrange([9, 5, -2, -1, 5, 0, -5, -3, 2]);

console.log(4 % 2)