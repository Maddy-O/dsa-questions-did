// my solution;
// function addOne(arr) {

//     if (arr.length < 2) {
//         return arr[0] + 1;
//     }

//     let number = arr[0] * 10;
//     // convert the digits to number;
//     for (let i = 1; i < arr.length; i++) {

//         if (i === arr.length - 1) {
//             number = (number + arr[i]);
//         }
//         else {
//             number = (number + arr[i]) * 10;
//         }

//     }

//     console.log(number)

//     let newNumber = number + 1;

//     let aa = [];
//     // converting the number into the single digits,
//     while (newNumber > 0) {

//         let num = newNumber % 10;

//         newNumber = (newNumber - num) / 10;

//         aa.unshift(num);

//     }

//     console.log(aa);

// }

// better approach
function addOne(arr) {

    let index = arr.length - 1;

    while (index >= 0 && arr[index] === 9) {
        arr[index--] = 0;
    }

    if (index < 0) {
        arr.unshift(1);
    } else {
        arr[index]++;
    }

    console.log(arr);
    return arr;
}

addOne([5, 6, 7, 8]);
addOne([9, 9, 9])
addOne([9, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5, 1, 7, 1, 1, 5, 2, 7, 6, 1, 4, 2, 3, 2, 2, 1, 6, 8, 5, 7, 6, 1, 8, 9, 2, 7, 9, 5, 4, 3, 1, 2, 3, 3, 4, 1, 1, 3, 8, 7, 4, 2, 7, 7, 9, 3, 1, 9, 8, 6, 5, 0, 2, 8, 6, 0, 2, 4, 8, 6, 5, 0, 9, 0, 0, 6, 1, 3, 8, 9, 3, 4, 4, 6, 0, 6, 6, 1, 8, 4, 9])