/**
Reverse All
Implementasikan function reverseAll untuk membalikkan `arr` DAN setiap elemen string yang ada di
dalamnya.
Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']
- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']
- input: []
  output: []


ATURAN CODING:
-------------- 
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .reverse()
  - .split()
  - .join()
*/

function reverseAll (arr) {
  let finalArr = [];
  for (let i = arr.length -1; i >= 0; i--) {
    let str = '';
    for (let j = arr[i].length -1; j >= 0 ; j--) {
      str += arr[i][j];
    }
    finalArr.push(str);
  }
  return finalArr;
}
  
   console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
   // ['iexela', 'iegres', 'irtimid']
   
   console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
   // [ 'ollem', 'raen', 'teilwal', 'arik' ]
   
   console.log(reverseAll([]));
   // []
