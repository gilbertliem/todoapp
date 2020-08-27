/*
==================================
Array Mastery: Pair Up
==================================
Nama:________
[INSTRUKSI]
Setiap student di Glints Academy ditugaskan untuk membuat tim project dengan komposisi tim dua orang.
Kita membutuhkan sebuah program untuk membuat tim-tim tersebut.
Function pairUp akan menerima satu parameter berupa array yang berisi string nama student.
Function ini akan mengelompokkan setiap dua nama menjadi satu kelompok, dan apabila tersisa satu student, student terakhir akan bersama instruktur.
Hasil pengelompokkan adalah sebuah array yang berisi string berupa nama dua orang student sebagai satu tim.
Formatnya adalah <Nama Student 1> dan <Nama Student 2>.
[CONTOH]
input: ['Budi', 'Badu', 'Indra', 'Indri']
output: ['Budi dan Badu', 'Indra dan Indri']
input: ['Budi', 'Badu', 'Indra', 'Indri', 'James']
output: ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
input: []
output: []
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!
*/

//1. pasangkan nama pertama dan nama kedua, 

function pairUp(student) {
   let result = [];
   for (i = 0; i < student.length; i += 2) { //
       if(student[i + 1]) {
           result.push(`${student[1]} dan ${student[i + 1]}`);
        } else {
            result.push(`${student[1]} dan Instruktur`);
        }
    //    let student1 = '';
    //    let student2 = '';
    //    if (student[i] % 2 !== 0) {
    //        return student1;
    //    } else if (student[i] % 2 === 0) {
    //        return student2;
    //    }
    //    return `${student1} dan ${student2}, `;
   }
   return result;
}

console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri']))
