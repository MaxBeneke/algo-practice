// Given two strings, write a function to determine if the second string is an anagram of the first.

//Attempt 1
function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return false;
    }
    let fCounter1 = {};
    let fCounter2 = {};
    
    for (let char of str1) {
        fCounter1[char] = (fCounter1[char] || 0) + 1
    }
    for (let char of str2) {
        fCounter2[char] = (fCounter2[char] || 0) + 1
    }
    for (let key in fCounter1) {
       if (fCounter1[key] !== fCounter2[key]) {
           return false
       }
       return true
   }
}

// Solution presented
function validAnagram1(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookup = {};

    for (let i = 0; i < first.length; i ++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}
