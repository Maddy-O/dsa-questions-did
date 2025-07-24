var twoSum = function(nums, target) {
    
    let inp = [];
    let a;

    for(let i=0; i<nums.length; i++){
        // if(Math.abs(nums[i])<=Math.abs(target)){
            for(let j=i+1; j<nums.length; j++){
                if(nums[i]+nums[j]===target){
                    inp.push(i);
                    inp.push(j);
                }
            }
        // }
    }

    console.log("aaaaaaaaaaaaaaaa", inp)

    return inp;

};

console.log(twoSum([-1,-2,-3,-4,-5],-8))
console.log(twoSum([-3,4,3,90],0))

console.log(0 - -3)


var twoSum = function(nums, target) {
    let box = {};
    for (let i = 0; i < nums.length; i++)
    {
        let need = target - nums[i];
        if (box[need] !== undefined)
        {
            return [box[need], i];
        }
        box[nums[i]] = i;
    }
};