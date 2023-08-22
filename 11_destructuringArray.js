const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

const [, , tiga, empat] = favorites;
console.log(tiga, empat);

let myFood = 'Ice Cream';
let herFood = 'Noodles';

console.log(myFood, herFood);

[myFood, herFood] = favorites;
console.log(myFood, herFood);

// Menukar nilai
let a = 5;
let b = 6;
let temp;

console.log('nilai a = ' + a);
console.log('nilai b = ' + b);
console.log('Kita akan menukarnya');
/* cara umum
temp = a;
a = b;
b = temp;
console.log('nilai a = ' + a);
console.log('nilai b = ' + b);
*/


[a, b] = [b, a];
console.log('nilai a = ' + a);
console.log('nilai b = ' + b);

// dest variabel yang tidak terjangkau, sehingg undefined
const fav = ["Seafood"];
const [myFood1, herFood2='Cumi'] = fav;
 
console.log(myFood1);
console.log(herFood2);