function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } 
    else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }

  return second;
}

// input from prompt
let n = Number(prompt());
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(Number(prompt()));
}

alert(secondHighest(arr));