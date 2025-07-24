function gradingStudents(grades) {
    // Write your code here
    let res = [];
    for(let i=0;i<grades.length;i++){
        if(grades[i]>=38 && grades[i]%5 >= 3){
            res.push(grades[i]+(5-(grades[i]%5)))
        }
        else{
            res.push(grades[i])
        }
    }
    return res;

}

let res = gradingStudents([73, 67, 38, 33]); // Example usage
// Output: [75, 67, 40, 33]
console.log(res); // Display the result
module.exports = gradingStudents; // Export the function for testing