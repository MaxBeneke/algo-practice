// Newspaper
// Note "string"
function hasEnoughLetters(note, newspaper) {
    // map note characters
    // Iterate through newspaper, if exists in map, then subtract
    //If it doesn't exist return false.
    // Return true at end of loop.
    //note: 'abcaa'
    //np: 'avfca'
    [[a, 5], [b, 6]];
    array[0][1];
    [1, 5, 6, 7];
    [a, a, a, b, b, c, c]

    let map = {};

    for (let char of newspaper) {
        if (map[char]) {
            map[char]++;
        } else {

        }
    }
    for (let char of note) {
        if (map[char]) {
            map[char]--;
        } else {
            return false;
        }
    }
    return true;

}