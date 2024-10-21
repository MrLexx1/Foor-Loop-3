// TUGAS KETIGA
let angka = parseInt(prompt("Masukkan Angka:"));

for (let i = 0; i < angka; i++) {
  let baris = "";
  for (let j = 0; j < angka; j++) {
    baris += "* ";
  }
  console.log(baris.trimEnd());
}