const myMap = new Map([
	['1', 'a string key'],
	[1, 'a number key'],
	[true, true]
]);

console.log(myMap);

const capital = new Map([
	['Jakarta', 'Indonesia'],
	['London', 'England'],
	['Tokyo', 'Japan']
]);

console.log('Capital size:', capital.size);
// Pastika menggunakan .get dan .set meskipun bisa menggunakan capital['Key']
console.log('Capital get london:', capital.get('London'));
capital.set('New Delhi', 'India');
console.log('Capital size:', capital.size);
console.log(capital)

// set
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);
console.log('menambahkan 5, 10, dan 6 :', numberSet);
numberSet.delete(4);
console.log('setelah angka 4 dihapus:', numberSet);