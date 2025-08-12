// Three Great Candidates
// Difficulty: EasyAccuracy: 16.92%Submissions: 73K+Points: 2
// The hiring team aims to find 3 candidates who are great collectively. Each candidate has his or her ability expressed as an integer. 3 candidates are great collectively if the product of their abilities is maximum. Given the abilities of some candidates in an array, arr[], return the maximum collective ability from the pool of candidates.

// Examples:

// Input: arr[] = [10, 3, 5, 6, 20]
// Output: 1200
// Explanation: Multiplication of 10, 6, and 20 is 1200.
// Input: arr[] = [-10, -3, -5, -6, -20]
// Output: -90
// Explanation: Multiplication of -3, -5 and -6 is -90.
// Constraints:
// 3 ≤ arr.size ≤ 105
// -103 ≤ arr[i] ≤ 103

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

// Approach:
function maxproduct(arr) {
    if (arr.length < 3) {
        return -1; // Not enough elements for a product of three
    }
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    let min1 = Infinity;
    let min2 = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        } else if (arr[i] > second) {
            third = second;
            second = arr[i];
        } else if (arr[i] > third) {
            third = arr[i];
        }

        if (arr[i] < min1) {
            min2 = min1;
            min1 = arr[i];
        } else if (arr[i] < min2) {
            min2 = arr[i];
        }
    }

    console.log(Math.max(first * second * third, first * min1 * min2));
    return Math.max(first * second * third, first * min1 * min2);

}

maxproduct([10, 3, 5, 6, 20]); //1200
maxproduct([-10, -3, -5, -6, -20]); //-90
maxproduct([1, 2, 3]); //6
maxproduct([-1, -2, -3]); //-6
maxproduct([-1, -2, 3]); //6
maxproduct([-1, -2, 3, 4]); //8
maxproduct([-1, -2, 3, 4, 5]); //60
maxproduct([852, -566, 182, -638, -693, -323]); //376698168