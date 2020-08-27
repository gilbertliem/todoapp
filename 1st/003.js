/**
--------------------
String Manipulators!
--------------------

Buatlah beberapa function berikut:

1. addTitle, yang menerima 4 parameter yaitu `name1`, `name2`, `name3` dan `name4`.
   Function akan menambahkan 'Mr. ' dan ', ' pada setiap nama dan mengembalikan nilai tersebut.
   Contoh:
   - input: addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard')
     output: 'Mr. Steve Fox, Mr. Jin Kazama, Mr. Eddie Gordo, Mr. Geese Howard'

2. changeSpacesWith, yang menerima 2 parameter yaitu `str` dan `to`.
   Function akan mengganti spasi di `str` dengan nilai yang kita berikan lewat parameter `to`
   dan mengembalikan nilai tersebut.
   Contoh:
   - input: changeSpacesWith('Steve Fox', '-')
     output: 'Steve-Fox'
   - input: changeSpacesWith('Sergei Dragunov', '+')
     output: 'Sergei+Dragunov'

3. cutString, yang menerima 1 parameter yaitu `str`.
   Function akan memotong string supaya tersisa 6 karakter dan mengembalikan nilai tersebut.
   Contoh:
   - input: cutString('Kazuya Mishima')
     output: 'Kazuya'
   - input: cutString('Sergei Dragunov')
     output: 'Sergei'
   - input: cutString('Dimitri W')
     output: 'Dimitr'

RULES:
- Dilarang menggunakan regex
- Dilarang menggunakan slice, split, splice, substring

*/

function addTitle (person1, person2, person3, person4) {
  // Code disini
  return `Mr. ${person1}, Mr. ${person2}, Mr. ${person3}, Mr. ${person4}`;
}

console.log(addTitle ('James', 'Tim', 'John', 'Paul'));


function changeSpacesWith (str, to) {
  // Code disini
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result += to;
      // return result;
    } else {
      result += str[i]
      // return result;
    }
  }
  return result;

}

console.log(changeSpacesWith ('James Johnson', '+'));

function cutString (str) {
  // Code disini
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if ([i] <= 6) {
      result += str[i];
    }
  }
  console.log(result);
  // return result;
}

console.log(cutString ('Kazuya Mishima'));