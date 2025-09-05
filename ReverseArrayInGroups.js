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