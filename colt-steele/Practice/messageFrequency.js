function constructNote(message, letters){
    let map = {};
    for (let i = 0; i < letters.length; i++) {
        map[letters[i]] ? map[letters[i]]+= 1 : map[letters[i]] = 1
    }
    for (let i = 0; i < message.length; i++) {
        if (!map[message[i]]) {
            return false
        } else {
            map[message[i]] -= 1;
        }
    }
    return true;
}