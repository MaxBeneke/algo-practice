// Get a digit in a number.

function getDigit(num, i) {
    // 7323 / 100 = 73.23 % 10 = 3
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Get the digit count for a number.

function digitCount(num) {
     if (num === 0) return 1;
     return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr) {
    let result = 0;
    for (let i of arr) {
        result = Math.max(result, digitCount(i))
    }
    return result
}

// Attempt
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < nums.length; i++) {
            let position = getDigit(nums[i], k);
            digitBuckets[position].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}