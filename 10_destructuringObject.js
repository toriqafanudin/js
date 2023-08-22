const profile = {
	firstName: 'Faisa',
	lastName: 'Nirbita',
	age: 19
}

/*
const {firstName, lastName, age} = profile;
console.log(firstName, lastName, age);

const {lastName} = profile;
console.log(lastName);

let firstName = 'Dhimas';
let age = 20;

({firstName, age} = profile);
// {firstName, age} = profile; => hal seperti ini tidak bisa dilakukan
console.log(firstName, age);
*/

const {firstName, lastName, isMale=true} = profile;
// isMale tidak ada dalam object, sehingga undefined
console.log(firstName, lastName, isMale);

// membuat penamaan yang berbeda dengan objectnya
const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
console.log(localFirstName, localLastName, localAge);