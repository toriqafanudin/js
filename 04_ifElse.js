let nilai = 40;

if(nilai >= 78){
	console.log('Selamat, Anda lulus');
}else if(nilai >= 60){
	console.log('Tetap semanga, coba lagi');
}else{
	console.log('Nilai Anda terlalu rendah');
}

const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);

let name = "";

if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}