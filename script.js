function secondHighest(arr) {
  if (!arr || arr.length < 2) return -Infinity;

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second === -Infinity ? -Infinity : second;
}


// take size
let n = Number(prompt());

// take array input
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(Number(prompt()));
}

// call function and show result
alert(secondHighest(arr));