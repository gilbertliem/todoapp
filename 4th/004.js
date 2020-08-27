// Competency: Function + Looping + Conditional
/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).
Contoh 1
--------
input: 3
x
xo
xox

Contoh 2
--------
input: 6
tampilan:
x
xo
xox
xoxo
xoxox
xoxoxo

*/

function drawLadder(row) {
    let result = '';
    for (let i = 0; i <= row; i++) {
        if ([i] % 3 === 0) {
            result += 'x';
            // console.log(result);
        } else if ([i] % 2 === 0){
            result += 'o';
            // console.log(result);
        }
        console.log(result);
    }
}

drawLadder(6);
drawLadder(3);
