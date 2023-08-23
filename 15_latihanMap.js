const currency = new Map([
	['USD', 14000],
	['JPY', 131],
	['SGD', 11000],
	['MYR', 3500]
]);

const priceInJPY = 5000;
let JPY = currency.get('JPY');
priceInIDR = priceInJPY * JPY;
console.log(priceInIDR);
console.log(JPY);