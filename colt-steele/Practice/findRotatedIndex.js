//[3,4,5,6,1,2,], 4 <- rotated around a pivot variable, find a value's index



function findRotatedIndex(nums, target){
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > right) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    let pivot = left;
    left = 0;
    right = nums.length - 1;
    
    if (nums[pivot] <= target && target <= nums[right]) {
        left = pivot;
    } else {
        right = pivot;
    }
    
    while (left < right) {
        let mid = Math.floor((left+right)/2)
        if (target === nums[mid]) {
            return mid;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        }
    }
    return -1
  }