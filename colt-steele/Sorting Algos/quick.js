// Quick Sort 

function oldPivot(arr, start = 0, end = arr.length + 1) {
    let pivotIdx = 0;
    let startSwap = 1;
    let endSwap;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[start]) {
            pivotIdx++;
            let temp = arr[i];
            arr[i] = arr[pivotIdx];
            arr[pivotIdx] = temp;
        }
    }
    let temp = arr[pivotIdx];
    arr[pivotIdx] = arr[start];
    arr[start] = temp;
    return pivotIdx;
}

// Solution for Pivot

function pivot(arr, start=0, end=arr.length+1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    let pivotVal = arr[start];
    let pivotIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivotVal > arr[i]) {
            pivotIdx++;
            swap(arr, pivotIdx, i)
        }
    }
    swap(arr, start, pivotIdx);
    return pivotIdx;
}

function quickSort(arr, left=0, right = arr.length - 1){
    if (left < right) {
        let pivotIdx = pivot(arr, left, right)
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

console.log(quickSort([1,4,7,2,6,3,89,33,12,55]))