//problem1
function printReverse(arr) { for (var i = arr.length - 1; i >= 0; i--) console.log(arr[i]); }

//problem2
function isUniform(arr)
{
	for (var i = 1; i < arr.length; i++) if (arr[i] !== arr[i-1]) return false;
	return true;
	// 
	// arr.forEach(function(item) {
	// 	if (item !== arr[0]) return false;
	// });
	// return true;
	// The above cannot be used because if false, it wil exit only the internal function(item) 
}

//problem3
function sumArray(arr)
{
	var sum = 0;
	arr.forEach(function(item) {
		sum += item;
	});
	return sum;
}

//problem4
function max(arr)
{
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) if (arr[i] > max) max = arr[i];
	return max;
}

printReverse(['a', 'b', 'c']);

console.log(isUniform([1, 1, 1, 1]));

console.log(isUniform([1, 2, 1, 1]));

console.log(sumArray([2, 3, 4, 5]));

console.log(max([2, 5, 8, 4, 16, 3]));