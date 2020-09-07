/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
  output -> 40% *, 40% #, 20% @
- `input` -> **#*##
  output -> 50% *, 50% #

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex

*/

function virusPercentage (input) { 
  let star = 0;
  let hash = 0;
  let add = 0;
  let dollar = 0;
  let count = 0;
  for (let i = 0; i < input.length; i++){
    if (input[i] === '*') {
      star++;
      count++;
    } else if (input[i] === '#') {
      hash++;
      count++; //
    } else if (input[i] === '@') {
      add++;
      count++;
    } else if (input[i] === '$') {
      dollar++;
      count++;
    }
  }
  // console.log(star);

  let returnArr = [];
  if (star !== 0) {
    const percentage = (star/count) * 100;
    returnArr.push(`${percentage}% *`);
  }
  if (hash !== 0) {
    const percentage = (hash/count) * 100;
    returnArr.push(`${percentage}% #`);
  }
  if (add !== 0) {
    const percentage = (add/count) * 100;
    returnArr.push(`${percentage}% @`);
  }
  if (hash !== 0) {
    const percentage = (dollar/count) * 100;
    returnArr.push(`${percentage}% $`);
  }
  // console.log(returnArr);

  returnStr = '';
  for (let i = 0; i < returnArr.length; i++) {
    if (returnStr !== 0) {
      returnStr += ', ';
    }
    returnStr += returnArr[i];
  }
  return returnStr;
  // console.log(returnStr);
}

console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @
