// Stock Buy and Sell – Multiple Transaction Allowed

// The cost of stock on each day is given in an array price[].
// Each day you may decide to either buy or sell the stock i at price[i],
// you can even buy and sell the stock on the same day.
// Find the maximum profit that you can get.

// Note: A stock can only be sold if it has been bought previously and multiple stocks
// cannot be held on any given day.

// Examples:

// Input: prices[] = [100, 180, 260, 310, 40, 535, 695]
// Output: 865
// Explanation: Buy the stock on day 0 and sell it on day 3 => 310 – 100 = 210.
// Buy the stock on day 4 and sell it on day 6 => 695 – 40 = 655.
// Maximum Profit = 210 + 655 = 865.

// Input: prices[] = [4, 2, 2, 2, 4]
// Output: 2
// Explanation: Buy the stock on day 3 and sell it on day 4 => 4 – 2 = 2.
// Maximum Profit = 2.

// Constraints:
// 1 <= prices.size() <= 105
// 0 <= prices[i] <= 104

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

// my approach (good)
function maximumProfit(prices) {

    let buy = prices[0];
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {

        if (prices[i + 1] < prices[i]) {
            profit += prices[i] - buy;
            buy = prices[i + 1];
        }
        if (i === prices.length - 1) {
            profit += prices[i] - buy;
        }

    }

    console.log(profit)

}

maximumProfit([100, 180, 260, 310, 40, 535, 695])
maximumProfit([4, 2, 2, 2, 4])