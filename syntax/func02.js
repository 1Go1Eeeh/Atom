func02.js
// var arr=['JoeBiden', 'male', 'age']	// arr for array

var o={
	'name':'JoeBiden', 		// Properties of Object O; name, gender, age
	'gender':'male', 		// Key : 값
	'age':'27'			// Key : value
}				// o for object

// console.log(o.name);

for (var x in o) {
// conlsole.log(o.x);
console.log(x, o[x]);		// x for property names (key value), o[x] for property count/values
}

// console.log(o.name, o['name']);	// same values will be returned, latter will be preferred conventionally
