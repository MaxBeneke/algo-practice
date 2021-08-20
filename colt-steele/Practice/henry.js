// isWord(str) => boolean
// input => nestedArray
// Helper Functions to traverse the 8 directions from any letter to another
// Helper Fn Keep track of which letters I've visited.
// if(!dir(1-8)) ignore it.
// Iterate through, starting at every letter, check every combination.
// Check isWord() for every combo -> if (true && !store['word']) result.push(word)

// As I iterate, check isWord(tempWord), continue with pathway, tempWord + letter
// Adjacency list for each letter. 
// A: [b, d, e]
// A[0]: [p, r, q]
// Stack: hold each new traversed letter.
// E: [I, P, T], push to stack, check isWord()
// while (stack.length) // go through each adjacency list, and (!visited) (based off position)
//array.forEach

function findAllWords(array) {
    let result = [];
    let stack = [];
    let visited = {};
    function findAjacencyList(letter) {
        return array;
    }
    function isWord(str) {
        return boolean;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            let currentWord = '';
            //push to stack.
            stack.push(array[i][j]);
            while (stack.length) {
                let letter = stack.pop();
                if (letter === currentWord.charAt(currentWord.length - 1)) {
                    currentWord = currentWord.slice(0, currentWord.length - 1);
                }
                currentWord += letter;
                // E is currentWord. Push all adjacencyList letters
                // A B 
                //  C

                if (isWord(currentWord)) result.push(currentWord);

                let adjacencyList = findAjacencyList(letter);
                visited[letter] = true;
                adjacencyList.forEach((letter) => {
                    if (!visited[letter]) {
                        stack.push(letter);
                    }
                    
                })
            }
        }
    }

    return result;
}