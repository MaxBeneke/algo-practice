// Attempt 1

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let min = arr[i];
        let minIdx = arr[i];

        for (var j = i; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                min = arr[j];
                minIdx = j;
            }
        }
        if (min !== arr[i]) {
            arr[minIdx] = arr[i];
            arr[i] = min;
        }
    }
}

// Solution

function selectionSortNew(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    return arr
}