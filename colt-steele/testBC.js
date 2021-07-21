const strangeSequence = (num) => {
    // Create a frequency hash table to keep track of the numbers we've added. Initialize our sequence and frequency table with the initial 'num'
    let map = {};
    map[num] = true;
    let sequence = [num];

    //Loop until we break
    while(true) {
        // Grab the last element and coerce it to an iterable string
        let currentInt = sequence[sequence.length - 1];
        let string = currentInt.toString();
        console.log(sequence)
        // Initialize our newNumber to 0 and add each digits' square to that value
        let newNumber = 0;
        for (let i = 0; i < string.length; i++) {
            newNumber += (Math.pow(parseInt(string[i]), 2))
        }

        // Add it to the sequence first before checking our frequency table. If it's appear, return the length, else add it to the frequency table.
        sequence.push(newNumber);
        if (map[newNumber]) {
            return sequence.length;
        } else {
            map[newNumber] = true;
        }
    }
}

const unlock = (start, end) => {
    let rotations = 0;
    
    // The rotations going one way is the absolute value of their difference
    // The rotations going the other way can be represented by adding 10 to one of the numbers, simulating the circle 
    for (let i = 0; i < start.length; i++) {
        let rightRotate = Math.abs(start[i] - end[i]);
        let leftRotate = (start[i] + 10) - end[i];
        let minimum = Math.min(rightRotate, leftRotate);
        rotations += minimum;
    }
    return rotations;
}

const alienLock = (start, end, set) => {
    // create a map of symbols set to each index number, simulating a numerical lock.
    let map = {};
    let rotations = 0;

    set.map((char, idx) => {
        map[char] = idx;
    })

    // The rotations are the same as before, but since the 'set' input can be any length, instead of simulating the circle with adding ten, we add the length of the 'set' array, to make it loop.
    for (let i = 0; i < start.length; i++) {
        let rightRotate = Math.abs(map[start[i]] - map[end[i]]);
        let leftRotate = (map[start[i]] + set.length) - map[end[i]];
        let minimum = Math.min(rightRotate, leftRotate);
        rotations += minimum;
    }
    return rotations;
}
console.log(alienLock(['*', '#', '+'], ['+', 'i', '/'], ['!', '+', '*', ')', 'i', '=', '/', '#']))