/*
==================================
Array Mastery: Second Largest
==================================
Nama:________

[INSTRUKSI]
Function secondLargest akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
secondLargest akan mengembalikan angka yang kedua terbesar dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 4

[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
- Dilarang menggunakan built in function Math and .apply
*/

// set final to zero
// defined second highest number from array
// if number is the second highest number drom value,
//      print out number to final 
// if number not second highest
//      leave it



function secondLargest(angka) {
    // step 1
    let largestNum = angka[0]; // misal angka terbesar mulai dari index 0
    for (let i = 0; i < angka.length; i++) {
        // console.log(largestNum[i]);
        if (largestNum < angka[i]) {
            largestNum = angka[i];
        }
    }
    // console.log(largestNum);

    // step 2
    // second largest = angka yg jika dikurangi largestNum memiliki selisih paling kecil 
    let secondNum = 0;
    let diff = largestNum; //
    // console.log(diff);
    for (let i = 0; i < angka.length; i++) {
        let newDiff = largestNum - angka[i]; //selisih 
        // console.log(newDiff);
        if (newDiff !== 0 && diff > newDiff) {
            diff = newDiff;
            secondNum = angka[i];
            // console.log(secondNum);
        }
    }
    return secondNum;
}

// TEST CASES
console.log(secondLargest([5, 2, 1, 4])); // 4
console.log(secondLargest([999, 5, 0, 1, 4, 998])); // 998
console.log(secondLargest([15, 32, 11, 14])); // 15
console.log(secondLargest([5, 4, 3, 2, 1, 0])); // 4
console.log(secondLargest([123, 321, 143, 313])); // 313