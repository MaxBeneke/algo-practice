// for an array of 0s and 1s, where 1s are first, count the 0s in the array.
// ex [1,1,1,1,0,0] //-> 2 0s

function countZeroes(arr){
    let slice = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) break;
        slice++;
    }
    let newArr = arr.slice(slice);
    return newArr.length;
  }