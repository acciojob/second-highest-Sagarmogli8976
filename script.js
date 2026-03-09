function secondHighest(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return -Infinity;
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }

    return second === -Infinity ? -Infinity : second;
}