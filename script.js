function secondHighest(arr) {

  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } 
    else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }

  }

  return secondMax;
}