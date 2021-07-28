var removeDuplicates = function(s, k) {
    let altered = false
    
    const onePass = (string, num) => {
        let stack = [];
        let count = 0;
        altered = false;
    
        for (let i = 0; i < string.length; i++) {
            stack.push(string[i]);
            count++;
 
            if (string[i] !== string[i-1]) {
                count = 1;
            }
            if (count === num) {
                altered = true;
                while (count >= 1) {
                    stack.pop();
                    count--;
                }
            }
        }
    return stack.join('')
    }
    
    let current = onePass(s, k)
    while(altered === true) {
        current = onePass(current, k);
    }
    return current;
};

console.log(removeDuplicates('aabaabcd', 2))