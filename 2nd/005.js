/**

Drone Position
==============

Implementasikan function dronePosition untuk mencari koordinat drone yang
ada di dalam `grid`. Drone akan direpresentasikan sebagai karakter '*'.

Format koordinat: <baris>, <kolom>

# Asumsi:
- Drone ('*') selalu berjumlah 1, tidak mungkin ada drone lain

Contoh input ada di test case.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

function dronePosition (grid) {
    // Code here
    let row = 0;
    let coloumn = 0;
    let hasDrone = false; //
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '*') {
                row = i;
                coloumn = j;
                hasDrone = true;
            }
            // console.log();
        }
    }
    if (hasDrone === false) {
        return 'NO DRONE';
    }
    return [row, coloumn];
}
  
  console.log(dronePosition([
    ['', '', ''],
    ['', '', ''],
    ['', '', '*']
  ])); // 2, 2
  
  console.log(dronePosition([
    ['', '', ''],
    ['', '*', ''],
    ['', '', '']
  ])); // 1, 1
  
  console.log(dronePosition([
    ['', '', '*'],
    ['', '', ''],
    ['', '', '']
  ])); // 0, 2
  
  console.log(dronePosition([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ])); // No drone
  