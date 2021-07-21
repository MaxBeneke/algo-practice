//[3,4,5,6,1,2,], 4 <- rotated around a pivot variable, find a value's index



function findRotatedIndex(arr, num){
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] > right) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    let pivot = left;
    left = 0;
    right = arr.length - 1;
    
    if (arr[pivot] <= num && num <= arr[right]) {
        left = pivot;
    } else {
        right = pivot;
    }
    while (left < right) {
        let mid = Math.floor((left+right)/2)
        if (num === arr[mid]) {
            return mid;
        }
        if (arr[mid] > num) {
            right = mid - 1;
        } else if (arr[mid] < num) {
            left = mid + 1;
        }
    }
    return -1
  }