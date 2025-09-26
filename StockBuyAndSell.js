
// my approach (not good)
// function maximumProfit(prices) {

//     let minIn = 0;
//     let minVa = Infinity;
//     let maxIn = 0;
//     let maxVal = -Infinity;

//     for (let i = 0; i < prices.length; i++) {

//         if (prices[i] > maxVal && i > minIn) {
//             maxVal = prices[i];
//             maxIn = i;
//         }

//         if (prices[i] < minVa) {
//             minVa = prices[i];
//             minIn = i;
//             maxVal = prices[i];
//             maxIn = i;
//         }

//     }

//     console.log(minIn, ";;", minVa);
//     console.log(maxIn, ";;", maxVal);

//     console.log(maxVal - minVa);

// }


// correct approach
function maximumProfit(prices) {

    let minSoFar = prices[0];
    let res = 0;

    for (let i = 1; i < prices.length; i++) {
        minSoFar = Math.min(minSoFar, prices[i]);
        res = Math.max(res, prices[i] - minSoFar);
    }

    return res;
}

maximumProfit([7, 10, 1, 3, 6, 9, 2])
maximumProfit([7, 6, 4, 3, 1])
maximumProfit([1, 3, 6, 9, 11])
maximumProfit([61, 44, 70, 78, 73, 95, 27, 1])