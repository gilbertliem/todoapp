// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus baris ganjil kelipatan 3. berurut sebagai berikut:

contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *

1 2 3
4 5 6
7 8 9

// pake for loop untuk penjabaran ke kanan dan ke bawah

// jabarin angkanya 0,1,2,3, dalam posisi turun / vertical
// jabarin angkanya 0,1,2,3,.. dalam posisi kekanan / horizontal
// ganti angka ganjil -> @, angka genap -> $, multiple by 3 -> *
// print out

contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @

contoh 3 (drawThreeColsBox(1)):
@

Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!
*/

//  pseudocode:
// define variabel i
// change ganjil -> @, genap -> $, multiple by 3 -> *
// set horizontal = vertical 

// SKELETON CODE (Code Sample)

function drawSymbolicColsBox(num) {
  // your code here
  let count = 1;
  for (let i = 0; i < num; i++) {
    let result = '';
    for (let j = 0; j < num; j++) {
      // result += count;
      if (count % 3 === 0) {
        result += '* ';
      } else if (count % 2 === 0) {
        result += '$ ';
      } else {
        result += '@ ';
      }
      count++;
    }
    console.log(result);
  }

  









  // let count = 1;
  // for (let i = 0; i < num; i++) {
  //   let temp = '';
  //   for (let j = 0; j < num; j++) {
  //     // temp = temp + count;
  //     // console.log(temp);
  //     if (count % 3 === 0) {
  //       temp += '* ';
  //     } else if (count % 2 === 0) {
  //       temp += '$ ';
  //     } else {
  //       temp += '@ ';
  //     };
  //     count++;
  //   }
  //   console.log(temp);
  // }
}

drawSymbolicColsBox(3);
  // console.log();
  // drawSymbolicColsBox(5);
  // console.log();
  // drawSymbolicColsBox(1);
  