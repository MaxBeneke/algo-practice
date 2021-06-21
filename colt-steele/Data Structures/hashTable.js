let total = 0;
total += "hello".charCodeAt(0) - 96

//String Hash function

function has(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}