let x = 10;
let y = 5;

x += y;
console.log(x);

const aString = '10';
const aNumber = 10;

// Perbedaan antara sama (==) dan identik (===)
console.log(aString == aNumber); // true
console.log(aString === aNumber); // false

// logical operator and (&&), or (||), not (!)

let angka1 = 7;
let angka2 = 8;
console.log('apakah hasil dari true dan false');
console.log(angka1 < angka2 && angka1 > angka2);
console.log('apakah hasil dari true or false');
console.log(angka1 < angka2 || angka1 > angka2);
console.log('apakah hasil dari !true');
console.log(!(angka1 < angka2));