function minimal(a, b){
	if(a < b){
		return a;
	}else if(b < a){
		return b;
	}else if(a === b){
		return a
	}
}

function findIndex(myArray, angka){
	ind = myArray.indexOf(angka);
	return ind;
}

myArray = [1, 2, 3, 4, 5, 6];
ind = findIndex(myArray, 7);
console.log('ind: ' + ind);