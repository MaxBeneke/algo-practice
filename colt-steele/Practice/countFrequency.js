// Given an array and a num, count occurences of the number

function sortedFrequency(arr, num){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) count += 1;
    }
    return count === 0 ? -1 : count;
}