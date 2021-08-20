// Merging together things that overlap.
//Ex input array of objects. Start key, end key. Numbers from 0-24
//Ex [{start: 10, end: 11}, {start: 10.5, end: 11.5}]
// Expected output [{start: 10, end: 11.5}]

// Iterate through array
// Keep track of the ranges of the times
// if an end exists between two starts they would.
// keep track of which ones overlap (index) filter
// if I have objA and objB, newObj = objA[start], objB[end]
// new AoObjs to return
// start will be lower than the end.

// brute force nested loop. For (i) for (j)
// if no overlaps push arr[i], else push({start: arr[i][start], end: array[j][end]})
// for i, if end[i] > start[j],
// var overlapEnd Math.max(overlapEnd, end[j]) -> initialized at end[i]
// var overlapStart Math.min(overlapStart, start[i]) -> initialized at start[i]
// push(start: overLapStart, end: overLapEnd)

// tempStart = start[i]
// tempEnd = end[i]
// sort the array by end
// once the start i+1 > end[i], push current values to the array, set tempStart, continue the loop.
const overlapTimeSheets = (array) => {
    let sortedArray = array.sort((a, b) => a[end] - b[end]);
    let result = [];
    let tempStart = sortedArray[0][start];
    let tempEnd = sortedArray[0][end];

    for (let i = 0; i < sortedArray.length; i++) {
        //Don't overlap
        if (sortedArray[i+1][start] > sortedArray[i][end]) {
            result.push({start: tempStart, end: tempEnd})
            tempStart = sortedArray[i+1][start]
            tempEnd = sortedArray[i+1][end]
            //Do overlap
        } else {
            tempEnd = sortedArray[i][end];
        }
    }
    return result;
}