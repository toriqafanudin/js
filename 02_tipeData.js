let x;
console.log(typeof(x));

let y = 25;
console.log(typeof(y));

let z = 13.75;
console.log(typeof(z));

let a = 'Faisa';
console.log(typeof(a));

let b = true;
console.log(typeof(b));

// increment
let angka = 5;
console.log(angka);
angka++;
console.log(angka);

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

const name = 'Faisa';
console.log('Helo my name is ${name}');

const id = Symbol("id");
console.log(id);

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);