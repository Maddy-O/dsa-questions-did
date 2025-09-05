// Reverse array in groups
// Difficulty: MediumAccuracy: 37.48%Submissions: 359K+Points: 4Average Time: 15m
// Given an array arr[] of positive integers. Reverse every sub-array group of size k.
// Note: If at any instance, k is greater or equal to the array size, then reverse the entire array.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 5], k = 3
// Output: [3, 2, 1, 5, 4]
// Explanation: First group consists of elements 1, 2, 3. Second group consists of 4, 5.
// Input: arr[] = [5, 6, 8, 9], k = 5
// Output: [9, 8, 6, 5]
// Explnation: Since k is greater than array size, the entire array is reversed.
// Constraints:
// 1 ≤ arr.size(), k ≤ 105
// 1 ≤ arr[i] ≤ 105

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)


//    My thought process

//  the first approach coming in my mind is to traverse the whole arr while keeping the count
// if the count is equal to given number then reverse it till the count


// function reverseInGroups(arr, k) {

//     let a = 0;
//     let n = arr.length;
//     let left = 0;
//     let right = k - 1;

//     while (a < n) {
//         if ((((a + 1) % k) === 0) && ((a + k) <= arr.length)) {
//             // console.log("..................", a);
//             // console.log("11111111111111111111", right);
//             right = a + 3;
//         }
//         // else
//         else {
//             if ((a + k) > arr.length) {
//                 // console.log("222222", right)
//                 // right = k - 1;
//                 // let t = arr[a];
//                 // arr[a] = arr[right];
//                 // arr[right] = t;
//                 // right--;
//             }
//             let t = arr[a];
//             arr[a] = arr[right];
//             arr[right] = t;
//             right--;
//         }
//         a++;
//     }
//     return arr;
// };

// console.log(reverseInGroups([1, 2, 3, 4, 5], 3));
// console.log(reverseInGroups([1, 2, 3, 4, 5, 6, 7, 8], 3));
// console.log(reverseInGroups([5, 6, 8, 9], 5));


// function reverseInGroups(arr, k) {

//     let n = arr.length;

//     for (let i = 0; i < n; i += k) {
//         let left = i;

// to handle case when k is not
// multiple of n
// let right = Math.min(i + k - 1, n - 1);
// console.log(left, "aaaaaaaaaaaa", right)
// reverse the sub-array [left, right]
// while (left < right) {

//     // Swap elements
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left += 1;
//     right -= 1;
// }
//     }
//     return arr;
// }

// Driver Code
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let k = 3;
// let arr1 = reverseInGroups(arr, k);
// console.log(arr1.join(" "));

// reverseInGroups(arr, k);










function reverseInGroups(arr, k) {

    for (let i = 0; i < arr.length; i += k) {

        let left = i;

        let right = Math.min(i + k - 1, arr.length - 1);

        while (left < right) {

            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;

        }


    }

    return arr;
};

console.log(reverseInGroups([1, 2, 3, 4, 5], 3));
console.log(reverseInGroups([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(reverseInGroups([5, 6, 8, 9], 5));