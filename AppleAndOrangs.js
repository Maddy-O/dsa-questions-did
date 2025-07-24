function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let ap=0;
    let or=0;
    for(let i=0;i<apples.length;i++){
        if(apples[i]>0 && apples[i]+a>=s && apples[i]+a<=t){
            ap++;
        }
    }
    console.log(ap)
    for(let j=0;j<oranges.length;j++){
        if(oranges[j]<0 && oranges[j]+b<=t && oranges[j]+b>=s){
            or++;
        }
    }
    console.log(or)
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]); // Example usage
// Output: 1 apple and 1 orange
module.exports = countApplesAndOranges; // Export the function for testing