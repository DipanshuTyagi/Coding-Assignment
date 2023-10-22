//B. Perform sorting of an array in descending order.

function sortArrayDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        // Swap the elements
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

const inputArray = [5, 3, 9, 1, 4];
sortArrayDescending(inputArray);
console.log(inputArray);
//In this code, the sortArrayDescending function sorts the array in descending order by manually iterating through the array and swapping elements when they are out of order. The result is a sorted array in descending order.
