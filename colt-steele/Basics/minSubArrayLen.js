// Arguments: array of integers and a positive integer
// Return the minimum continuous subarray that is greater than or equal to the sum given. 
// If none exists return 0

// Attempt 2
function minSubArrayLen(arr, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    
    while (start < arr.length) {
        
        if (total < sum && end < arr.length) {
            total += arr[end];
            end ++;
        } else if (total >= sum) {
            minLen = Math.min(minLen, end-start);
            total -= arr[start];
            start++;
        } else {
            break;
        }
    }
   return minLen === Infinity ? 0 : minLen;
}