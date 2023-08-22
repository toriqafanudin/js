const user = {
	firstName: 'Faisa',
	lastName: 'Nirbita',
	age: 19,
	isJedi: true
}

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}, usia saya ${user.age}`);

user.lastName = 'Mahmudah';

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}, usia saya ${user.age}`);

user['age'] = 20;

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}, usia saya ${user.age}`);

console.log(user);

delete user.isJedi;

console.log(user);