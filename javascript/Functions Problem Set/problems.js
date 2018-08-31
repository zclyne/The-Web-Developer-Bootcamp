function kebabToSnake(str) {
	//replace all '-' with "_"s
	var newStr = str.replace(/-/g , "_");
	//.replace doesn't replace the chars in the original string, it just return a new copy with the replaced data 
	//return str
	return newStr;
}