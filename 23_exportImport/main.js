const coffeestock = require('./state');
console.log(coffeestock);

// Selanjutnya kita bisa menggunakan coffeestock selayaknya variabel local
const makeCoffee = (type, miligrams) => {
        if (coffeestock[type] >= miligrams) {
                console.log("Kopi berhasil dibuat");
        } else {
                console.log("Biji kopi habis!");
        }
}

makeCoffee("robusta", 80);
console.log(makeCoffee);