function maxSubarraySum(arr, size){
    if (size > arr.length) {
        return null;
    }
    let maxSum = 0;
    for (let i = 0; i < size; i++) {
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    for (let i = size; i < arr.length; i++) {
        tempSum += (arr[i] - arr[i-size]);
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
  }