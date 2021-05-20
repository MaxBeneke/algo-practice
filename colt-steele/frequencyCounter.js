// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(n)

// Sample input:

// sameFrequency(182, 281) //=> true
// sameFrequency(34, 12) //=> false
// sameFrequency(22, 222) //=> false

//Attempt 1
function sameFrequency(num1, num2){
    let arr1 = ('' + num1).toString();
    let arr2 = ('' + num2).toString();
    let lookup = {};
    
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i];
        lookup[num] ? lookup[num] += 1 : lookup[num] = 1;
    }
    for (let j = 0; j < arr2.length; j++) {
        let num = arr2[j];
        if (!lookup[num]) {
            return false
        } else {
            lookup[num] -= 1;
        }
    }
    return true
}
