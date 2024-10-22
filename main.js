// TUGAS KETIGA
let panjang = parseInt(prompt("Masukkan Angka:"));
let tinggi = parseInt(prompt("Masukkan Angka:"));

let baris = "";

for (let i = 0; i < panjang; i++) {
  for (let j = 0; j < tinggi; j++) {
    baris += "* ";
  }
  baris += "\n";
}
console.log(baris.trimEnd());
alert(baris);
