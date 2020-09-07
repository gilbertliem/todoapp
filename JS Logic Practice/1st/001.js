/**
Buatlah sebuah script untuk menampilkan nama & nilai dari siswa di kelas :
Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:
 - Nilai 80 - 100: A
 - Nilai 65 - 79: B
 - Nilai 50 - 64: C
 - Nilai 35 - 49: D
 - Nilai 0 - 34: E

 Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.

NOTED:
Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
contoh : 
1.
name = 'Rocky'
nilai = '90'
output : 'Nilai Rocky mendapatkan nilai A'

name = 'John Doe'
nilai = '0'
output : 'Nilai Invalid

**/

let name = 'Rocky';
let nilai = '81';

if (nilai >= 80 && nilai <= 100) {
    console.log(`Nilai ${name} mendapatkan nilai A`);
} else if (nilai >= 65 && nilai <= 79) {
    console.log(`Nilai ${name} mendapatkan nilai B`);
} else if (nilai >= 50 && nilai <= 64) {
    console.log(`Nilai ${name} mendapatkan nilai C`);
} else if (nilai >= 35 && nilai <= 49) {
    console.log(`Nilai ${name} mendapatkan nilai D`);
} else if (nilai >= 0 && nilai <= 34) {
    console.log(`Nilai ${name} mendapatkan nilai E`);
} else {
    console.log('Nilai Invalid');
}



// boleh pake sudut pandang orang pertama atau org ketiga
// 