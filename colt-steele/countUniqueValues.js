//Given a sorted array of multiple integers, count the number of UNIQUE values in the array.

// Attempt 1
function countUniqueValues(arr){
  let i = 0;
  let j = 1;
  
  if (arr.length === 0) {
      return 0;
  }
  
  while (j <= arr.length - 1) {
      if (arr[i] == arr[j]) {
          j++
      } else if (arr[i] !== arr[j]) {
          i++
          arr.splice(i, 1, arr[j])
          j++
      }
  }
  return i + 1;
}

// Their Solution
function countUniqueValues1(arr) {
    var i = 0;
    for (var j = 1; j < arr.length: j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
}