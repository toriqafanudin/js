/*
// Function declaration (Regular)
function sayHello(greet){
	console.log(`${greet}!`);
}

// Function expression (Regular)
const sayName = function(name){
	console.log(`Nama saya ${name}`);
}

sayHello('Faisa');
sayName('Nirbita');
*/

// Function expression (Arrow Function)
const sayHello = (greet) => {
	console.log(`${greet}!`);
}

const sayName = (name) => {
	console.log(`Nama saya ${name}`);
}

sayHello('Faisa');

const menyapa = () => {console.log('Selamat Pagi!');}
menyapa();

const menyapa2 = () => {console.log('Selamat Siang!');}
menyapa2();

const perkalian = (a, b) => a*b;
console.log(perkalian(4, 5));