// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

//Attempt 1
function averagePair(arr, int){
  if (arr.length === 0) return false;
  let i = 0;
  let j = arr.length - 1;
  
  while (i < j) {
      let avg = (arr[i] + arr[j]) / 2
      if (avg > int) {
          j--
      } else if (avg < int) {
          i++
      } else if (avg === int) {
          return true;
      }
  }
  return false;
}