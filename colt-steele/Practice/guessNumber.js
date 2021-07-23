// I'll pick a number 1 < num < n, you can guess using the guess() function which returns -1, 0, 1 for if it's lower, higher or correct. Find my number

var guessNumber = function(n) {
    let left = 1;
    let right = n;
    while (left <= right) {
        let mid = Math.floor((right+left)/2)
        if (guess(mid) === 0) return mid;
        if (guess(mid) === -1) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }

};