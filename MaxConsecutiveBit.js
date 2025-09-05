// Max Consecutive Bit
// Difficulty: EasyAccuracy: 49.84%Submissions: 12K+Points: 2
// Given an array arr[] consisting of only 0’s and 1’s, return count of the maximum number of consecutive 1’s or 0’s present in the array.

// Examples:
// Input: arr[] = [0, 1, 0, 1, 1, 1, 1]
// Output: 4
// Explanation: The maximum number of consecutive 1’s in the array is 4 from index 3-6.
// Input: arr[] = [0, 0, 1, 0, 1, 0]
// Output: 2
// Explanation: The maximum number of consecutive 0’s in the array is 2 from index 0-1.
// Input: arr[] = [0, 0, 0, 0]
// Output: 4
// Explanation: The maximum number of consecutive 0’s in the array is 4.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 1

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

// ------------------------------------------------------------------------

function maxConsecBits(arr) {

    let maxZeros = 0, currZeros = 0;
    let maxOnes = 0, currOnes = 0;

    for (const bit of arr) {
        if (bit === 0) {
            currZeros++;
            currOnes = 0; // reset ones streak
            maxZeros = Math.max(maxZeros, currZeros);
        } else if (bit === 1) {
            currOnes++;
            currZeros = 0; // reset zeros streak
            maxOnes = Math.max(maxOnes, currOnes);
        }
    }

    console.log(Math.max(maxZeros, maxOnes));
    // Return the maximum of both counts
    return Math.max(maxZeros, maxOnes);

}

maxConsecBits([0, 1, 0, 1, 1, 1, 1]); // Output: 4
maxConsecBits([0, 0, 1, 0, 1, 0]); // Output: 2
maxConsecBits([0, 0, 0, 0]); // Output: 4
maxConsecBits([1, 1, 1, 0, 0, 1, 1]); // Output: 3
maxConsecBits([1, 0, 0, 1, 1, 1]); // Output: 3
maxConsecBits([1, 0, 1, 0, 1]); // Output: 2
maxConsecBits([0, 1, 0, 0, 0, 1, 1]);   