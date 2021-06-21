let total = 0;
total += "hello".charCodeAt(0) - 96

//String Hash function

function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.floor(key.length, 100); i++) {
        let value = key.charCodeAt(i) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

// Actual Table

class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.floor(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key)
        this.keyMap[index] ? this.keyMap[index].push([key, value]) : this.keyMap[index] = [[key, value]]
    }
    get(key) {
       let index = this._hash(key)
       if (this.keyMap[index]) {
           for (i = 0; i < this.keyMap[index].length; i++) {
               if (this.keyMap[index][0] === key) {
                   return this.keyMap[index][1]
               }
           } 
       }
       return undefined;
    }
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][1]))
                    keysArr.push(this.keyMap[i][j][0])
                }
            }
        }
        return keysArr;
    }
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1]))
                    valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }
        return valuesArr;
    }
}