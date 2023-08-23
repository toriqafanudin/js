function greeting(name, language){
	if(language === 'English'){
		return `Good Morning ${name}!`;
	}else if(language === 'French'){
		return `Bonjour ${name}!`;
	}else{
		return `Selamat Pagi ${name}`;
	}
}

let ucapan = greeting('Faisa', 'French');
console.log(ucapan);

function perkalian(a, b){
	return a * b;
}

console.log('2 x 3 =', perkalian(2, 3));

// Function dengan parameter Object
const user = {id: 24, displayName: 'Faisa', fullName: 'Faisa Nirbita'};

function perkenalan({displayName, fullName}){
	console.log(`${displayName} is ${fullName}`);
}

perkenalan(user);

// Default parameter
function pangkat(angka, pangkat=2){
	let hasil;
	hasil = angka**pangkat;
	return hasil;
}

hasil = pangkat(3, 4);
console.log('3 pangkat 4 =', hasil);
hasil = pangkat(3);
console.log('3 pangkat 2 =', hasil);

// Rest parmeter
function sum(...numbers){
	let result = 0;
	for(let number of numbers){
		result += number;
	}
	return result;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));