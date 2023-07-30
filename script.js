function sort(array) {
  if (array.length == 1) {
    return array;
  }
  const left = array.splice(0, Math.floor(array.length / 2));
  const right = array;
  return merge(sort(left), sort(right));
}
function merge(arr1, arr2) {
  let sortedArr = [];
  let countLeft = 0;
  let countRight = 0;
  while (countLeft < arr1.length || countRight < arr2.length) {
    if (arr1[countLeft] < arr2[countRight]) {
      sortedArr.push(arr1[countLeft]);
      countLeft += 1;
      if (arr1.length == countLeft) {
        sortedArr = sortedArr.concat(arr2.slice(countRight));
        countRight = arr2.length;
      }
    } else if (arr1[countLeft] > arr2[countRight]) {
      sortedArr.push(arr2[countRight]);
      countRight += 1;
      if (arr2.length == countRight) {
        sortedArr = sortedArr.concat(arr1.slice(countLeft));
        countLeft = arr1.length;
      }
    } else {
      // push both into sortedArr and sht..
      //
      if (!(countLeft == arr1.length)) {
        sortedArr.push(arr1[countLeft]);
      }
      if (!(countRight == arr2.length)) {
        sortedArr.push(arr2[countRight]);
      }
      countLeft += 1;
      countRight += 1;
    }
  }
  return sortedArr;
}
