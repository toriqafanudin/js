import coffeestock from "./state.mjs";
console.log(coffeestock);

// Selanjutnya kita bisa menggunakan coffeestock selayaknya variabel local
const displayStock = stock => {
        for (const type in stock) {
          console.log(type);
        }
}
       
displayStock(displayStock);