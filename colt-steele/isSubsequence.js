// isSubsequence takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. IN other words, the fn should check whether the characters in the first string appear somewhere in the second string WITHOUT THEIR ORDER CHANGING 

// Attempt 1 (correct)
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
      while (j < str2.length && i < str1.length) {
        if (str1[i] == str2[j]) {
          i++;
          j++;
        } else if (str1[i] !== str2[j]) {
          j++;
        }
      }
      if (i === str1.length) {
          return true;
      } else {
          return false;
      }
}

// Their solution 
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}