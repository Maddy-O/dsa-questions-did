// Second Largest

// Given an array of positive integers arr[], return the second largest element from the array.
// If the second largest element doesn't exist then return -1.

// Note: The second largest element should not be equal to the largest element.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.
// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.
// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 and the second largest element does not exist.

// Constraints:

// 2 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 105

// -----------------------------------------------------------------------


// function getSecondLargest(arr) {
//     // code here
//     let fL = 0;
//     let sL = -1;

//     if (arr.length < 2) {
//         console.log("Array length is greater than 2");
//         return -1;
//     }

//     for (let i = 0; i < arr.length; i++) {

//         if(i===0){
//             if(arr[i] < arr[i+1]) {
//                 sL = arr[i];
//                 fL = arr[i+1];
//             }
//             else if(arr[i] > arr[i+1]) {
//                 fL = arr[i];
//                 sL = arr[i+1];
//             }
//             else{ sl = fl = arr[i]; }

//              console.log("aaaa", fL);
//         console.log("bbbb", sL);
//         }
//         else{

//             if (arr[i] > fL) {
//                 fL = arr[i];
//             }

//             else if(arr[i] > sL && arr[i] < fL){
//                 sL = arr[i];
//             }

//         }

//         // console.log("aaaa", fL);
//         // console.log("bbbb", sL);

//     }

//     if(fL === sL || sL === -1) {
//         console.log(-1);
//         return -1;
//     }

//     if(sL<fL && sL !== -1) {
//         console.log(sL);
//         return sL;
//     }

// }
// ================================================
// function getSecondLargest(arr) {

//     let fL = arr[0];
//     let sL = arr[0];

//     if (arr.length < 2) {
//         return -1;
//     }

//     for (let i = 1; i < arr.length; i++) {

//         if (arr[i] > fL) {
//             fL = arr[i];
//         }

//         if (arr[i] > sL && arr[i] < fL) {
//             sL = arr[i];
//         }

//         else if(fL === sL && arr[i] < sL) {
//             sL = arr[i];
//         }

//     }

//     // console.log(fL)
//     console.log("sl---", sL)

//     if (fL === sL || sL === -1) {
//         console.log(-1);
//         return -1;
//     }

//     if (sL < fL && sL !== -1) {
//         console.log(sL);
//         return sL;
//     }

// }
// ================================================
// function getSecondLargest(arr) {

//     let fL = sL = -Infinity;

//     if (arr.length < 2) {
//         return -1;
//     }

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > fL) {
//             sL = fL;
//             fL = arr[i];
//         }
//         if (arr[i] > sL && arr[i] !== fL) {
//             sL = arr[i];
//         }

//     }

//     // console.log(fL)
//     console.log("sl---", sL)
//     if (sL === -Infinity) {
//         console.log(-1);
//         return -1;
//     }
//     else {
//         console.log(sL);
//         return sL;
//     }

// }
//================================================
function getSecondLargest(arr) {
    if (arr.length < 2) return -1;

    let first = -Infinity;
    let second = -Infinity;

    for (const num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }
    console.log(-Infinity ? -1 : second)
    return second === -Infinity ? -1 : second;
}

getSecondLargest([34, 35, 1, 10, 12, 1]); //34
getSecondLargest([12, 35, 1, 10, 34, 1]); //34
getSecondLargest([10, 5, 10]); //5
getSecondLargest([10, 10, 10]); //-1
getSecondLargest([28078, 19451, 935, 28892, 2242, 3570, 5480, 231]); //28078