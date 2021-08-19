function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let curr = array[i];
        for (let j = i - 1; j >= 0 && array[j] > curr; j--) {
            array[j+1] = array[j]
        }
        arr[j+1] = curr;
    }
    return array;
}