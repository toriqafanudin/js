const {coffeestock, isCoffeeMachineReady} = require('./state');
console.log(coffeestock);
console.log(isCoffeeMachineReady);

// Selanjutnya kita bisa menggunakan coffeestock selayaknya variabel local
const makeCoffee = (type, miligrams) => {
        if (coffeestock[type] >= miligrams) {
                console.log("Kopi berhasil dibuat");
        } else {
                console.log("Biji kopi habis!");
        }
}

makeCoffee("robusta", 80);