function secondHighest(arr) {
	if (!arr || arr.length < 2) return -Infinity;

	arr = arr.map(Number);

	let max = -Infinity;
	let second = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			second = max;
			max = arr[i];
		} else if (arr[i] > second && arr[i] !== max) {
			second = arr[i];
		}
	}

	return second === -Infinity ? -Infinity : second;
}

function Main() {
	var n = prompt("Enter the number of elements");
	var arr = [];

	for (var i = 0; i < n; i++) {
		arr[i] = prompt("Enter element " + (i + 1));
	}

	alert(secondHighest(arr));
}

Main();