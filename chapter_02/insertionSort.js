function insertionSort(arr) {
  // arr = [5, 2, 4, 6, 1, 3]
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]));
