


export default function hasNestedObject(obj){


	for (var key in obj) {
		const notFunction = typeof (obj[key]) !== 'function';

		if (notFunction){
			console.error("DENUX ERROR:", key, "in the reducer is not a function, did you provide a nested object?");
			return notFunction
		}
	}
	return false;

};

