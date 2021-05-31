// Recursive function that takes an array and returns the product of every element

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.splice(1));
}