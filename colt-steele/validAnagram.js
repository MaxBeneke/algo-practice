// Given two strings, write a function to determine if the second string is an anagram of the first.

//Attempt 1
function validAnagram(str1, str2){
    let fCounter1 = {};
    let fCounter2 = {};
    
    for (let char of str1) {
        fCounter1[char] ? fCounter1[char] += 1 : fCounter1[char] = 1;
    }
    for (let char of str2) {
        fCounter2[char] ? fCounter2[char] += 1 : fCounter2[char] = 1;
    }
    for (let element of fCounter1) {
       if (element !== fCounter2[element]) {
           return false
       }
       return true
   }
}
