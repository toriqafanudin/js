const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
console.log(favorites);
console.log(...favorites);
console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

const others = ['Cake', 'Pie', 'Donut'];
const allFavorite = [favorites, others];

console.log(allFavorite);

const allFav = [...favorites, ...others];
console.log(allFav);
console.log(...allFav);

const obj1 = {firstName: 'Faisa', age: 30};
const obj2 = {lastName: 'Nirbita', gender: 'P'}
const newObj = {...obj1, ...obj2};
console.log(newObj);
// console.log(...newObj); tidak diperbolehkan