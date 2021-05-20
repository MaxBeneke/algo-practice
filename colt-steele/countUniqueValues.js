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
  return i + 1
}