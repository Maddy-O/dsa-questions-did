// Remove Duplicates Sorted Array

// You are given a sorted array arr[] containing positive integers.
// Your task is to remove all duplicate elements from this array such
// that each element appears only once.
// Return an array containing these distinct elements in the same order
// as they appeared.

// Examples :

// Input: arr[] = [2, 2, 2, 2, 2]
// Output: [2]
// Explanation: After removing all the duplicates only one instance of 2
// will remain i.e. [2] so modified array will contains 2 at first position
// and you should return array containing [2] after modifying the array.

// Input: arr[] = [1, 2, 4]
// Output: [1, 2, 4]
// Explation:  As the array does not contain any duplicates so you should
// return [1, 2, 4].

// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 106

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)



// my approach (its ok but why creating new array)
// function removeDuplicates(arr) {
//     // code here

//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {

//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i]);
//         }

//     }

//     console.log(newArr);

// }


// bette approach
function removeDuplicates(arr) {
    const n = arr.length;
    if (n <= 1)
        return n;

    // Start from the second element
    let idx = 1;
    for (let i = 1; i < n; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[idx++] = arr[i];
        }
    }

    console.log(idx);
    return idx
}


removeDuplicates([2, 2, 2, 2, 2]);
removeDuplicates([1, 2, 4]);
removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5]);