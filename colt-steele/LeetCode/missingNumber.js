// For an array of distinct numbers [0,n], find the missing number in the chain.
// [0,3,1] missing is 2 because 0123
// [0] missing is 1 because [0,1]

var missingNumber = function(nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
       hash[nums[i]] = true;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!hash[i]) {
            return i;
        }
    }
    return nums.length
};