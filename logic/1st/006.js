/**
Array Merge
-----------
Mishima Zaibatsu mempunyai 2 mata-mata untuk mencari nama orang yang berpotensi untuk mengalahkan
Heihachi Mishima dan mengambil alih perusahaan miliknya. 2 mata-mata ini mengerjakan tugasnya
dengan baik, tetapi ada saatnya kedua data yang diberikan memiliki duplikat (nama yang sama).
Implementasikan function arrayMerge untuk menggabungkan 2 data yang diberikan kepada
Mishima Zaibatsu dan jangan sampai terdapat nama yang sama di data yang sudah tergabung tadi.
Contoh:
- input: ['kazuya', 'jin', 'lee'], ['kazuya', 'feng']
  output: ['kazuya', 'jin', 'lee', 'feng']
- input: ['lee', 'jin'], ['kazuya', 'panda']
  output: ['lee', 'jin', 'kazuya', 'panda']


ATURAN CODING:
-------------- 
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .concat()
  - .indexOf() / .lastIndexOf() / .includes()
  - .copyWithin()
*/


function arrayMerge (firstData, secondData) {
  let finalname = firstData; // finalName = ['king', 'devil jin', 'akuma']

  for (let i = 0; i < secondData.length; i++) { // i = 0
    let doubled = false;
    for (let j = 0; j < firstData.length; j++) { // j = 0
      if (secondData[i] === firstData[j]) { // eddie = king, steve = king, geese = king, 
        doubled = true;
      }
    }
    if (doubled === false) { // eddie != king
      finalname.push(secondData[i]);
    }
  }
  return finalname;

    // let arrayJoin = firstData;
    // for (let i = 0; i < secondData.length; i++) {
    //     arrayJoin.push(secondData[i]);
    // }
    // let result = [];
    // for (j = 0; j < arrayJoin.length; j++) {
    //     let idx
    //     if (i == 0) {
    //         result.push(arrayJoin[i])
    //     } else {
    //         for (let k = 0; k < result.length; k++) {
    //             if (result[k] == arrayJoin[j]) {
    //                 idx = k
    //             } else {
    //                 idk = -1
    //             }
    //         }
    //         if (idk == -1) {
    //             result.push(arrayJoin[j])
    //         }
    //     }
    // }
}

// Test cases

console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// ['sergei', 'jin', 'steve', 'bryan']

console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ['devil jin', 'sergei']));
// ['devil jin', 'sergei']

console.log(arrayMerge(['hwoarang'], []));
// ['hwoarang']

console.log(arrayMerge([], []));
// []
